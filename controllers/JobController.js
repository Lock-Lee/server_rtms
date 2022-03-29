const connect = require("../models/BaseModel");
const inTransaction = require("../utils/inTransaction");
const job_model = require("../models/JobModel");
const jobop_model = require("../models/JobOpModel");
const jobopmachine_model = require("../models/JobOpMachineModel");
const jobopmtools_model = require("../models/JobOpToolsModel");
const jobopmtoolsuse_model = require("../models/JobOpToolsUsesModel");
const machine_model = require("../models/MachineModel");
const product_model = require("../models/ProductModel");
const Task = function (task) {
  this.task = task.task;
};

Task.getJobLastCode = async function getJobLastCode(data) {
  const connection = await connect();

  const result = await job_model.getJobLastCode(data, connection);

  connection.release();
  return result;
};

Task.getJobBy = async function getJobBy(data) {
  const connection = await connect();

  const result = await job_model.getJobBy(data, connection);

  connection.release();
  return result;
};

Task.getJobByCode = async function getJobByCode(data) {
  const connection = await connect();

  let job = await job_model.getJobByCode(data, connection);

  let job_ops_result = await jobop_model.getJobOpByCode(job.data, connection);

  job.data.job_ops = job_ops_result.data;
  for (let i = 0; i < job.data.job_ops.length; i++) {
    let job_ops_tools_result = await jobopmtools_model.getJobOpToolsByCode(
      job.data.job_ops,
      connection
    );
    job.data.job_ops[i].job_op_tools = job_ops_tools_result.data;

    for (let j = 0; j < job.data.job_ops[i].job_op_tools.length; j++) {
      let job_ops_tools_use_result =
        await jobopmtoolsuse_model.getJobOpToolsUsesByCode(
          job.data.job_ops[i].job_op_tools[j],
          connection
        );

      job.data.job_ops[i].job_op_tools[j].job_op_tools_uses =
        job_ops_tools_use_result.data;
    }

    let job_ops_machine_result = await jobopmachine_model.getJobOpMachineByCode(
      job.data.job_ops[i].job_op_code,
      connection
    );

    job.data.job_ops[i].job_op_machines = job_ops_machine_result.data;
  }

  return job;
};

Task.insertJob = async function insertJob(data) {
  const now = new Date();

  const result = await inTransaction(async (connection, next) => {
    const trans = [];
    trans.tran1 = await job_model.insertJob(data, connection);
    const { job_ops } = data.job;

    for (let ops_data of job_ops) {
      let last_code = await jobop_model.getJobOpLastCode(
        {
          code: `OP${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}`,
          digit: 4,
        },
        connection
      );

      ops_data.job_op_code = last_code.data;
      ops_data.job_code = data.job.job_code;

      trans.tran2 = await jobop_model.insertJobOp(ops_data, connection);

      for (let machines_data of ops_data.job_op_machines) {
        let last_code = await jobopmachine_model.getJobOpMachineLastCode(
          {
            code: `MC${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 4,
          },
          connection
        );

        machines_data.job_op_machine_code = last_code.data;
        machines_data.job_op_code = ops_data.job_op_code;

        trans.tran3 = await jobopmachine_model.insertJobOPMachine(
          machines_data,
          connection
        );
      }

      for (let tools_data of ops_data.job_op_tools) {
        let last_code = await jobopmtools_model.getJobOpToolsLastCode(
          {
            code: `TooL${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 4,
          },
          connection
        );

        tools_data.job_op_tools_code = last_code.data;
        tools_data.job_op_code = ops_data.job_op_code;
        trans.tran4 = await jobopmtools_model.insertJobOpTools(
          tools_data,
          connection
        );

        for (tools_data_use of tools_data.job_op_tools_uses) {
          let last_code = await jobopmtoolsuse_model.getJobOpToolsUsesLastCode(
            {
              code: `ToolU${now.getFullYear()}${(now.getMonth() + 1)
                .toString()
                .padStart(2, "0")}`,
              digit: 4,
            },
            connection
          );

          tools_data_use.job_op_tools_use_code = last_code.data;
          tools_data_use.job_op_tools_code = tools_data.job_op_tools_code;
          trans.tran5 = await jobopmtoolsuse_model.insertJobOpToolsUses(
            tools_data_use,
            connection
          );
        }
      }
    }

    return next(trans);
  });
  connection.release();
  return result;
};

Task.updateJobBy = async function updateJobBy(data) {
  const now = new Date();

  const result = await inTransaction(async (connection, next) => {
    const trans = [];
    const { job } = data;

    trans.update1 = await job_model.updateJobBy(job, connection);
    const { job_ops } = data.job;

    trans.del1 = await jobop_model.deleteJobOpByCodeNotIn(job, connection);

    for (let ops_data of job_ops) {
      if (ops_data.job_op_code == "") {
        let last_code = await jobop_model.getJobOpLastCode(
          {
            code: `JOBOP${now.getFullYear()}${(now.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`,
            digit: 4,
          },
          connection
        );

        ops_data.job_op_code = last_code.data;
        ops_data.job_code = ops_data.job_code;

        trans.insert1 = await jobop_model.insertJobOp(ops_data, connection);
      } else {
        trans.update2 = await jobop_model.updateJobOpBy(ops_data, connection);
      }

      trans.del2 = await jobopmachine_model.deleteJobOpmachineByCodeNotIn(
        ops_data,
        connection
      );
      for (let machines_data of ops_data.job_op_machines) {
        if (machines_data.job_op_machine_code == "") {
          let last_code = await jobopmachine_model.getJobOpMachineLastCode(
            {
              code: `JOBOPMC${now.getFullYear()}${(now.getMonth() + 1)
                .toString()
                .padStart(2, "0")}`,
              digit: 4,
            },
            connection
          );

          machines_data.job_op_machine_code = last_code.data;
          machines_data.job_op_code = ops_data.job_op_code;
          trans.insert2 = await jobopmachine_model.insertJobOPMachine(
            machines_data,
            connection
          );
        } else {
          trans.update3 = await jobopmachine_model.updateJobOpMachineBy(
            machines_data,
            connection
          );
        }
      }

      trans.del3 = await jobopmtools_model.deleteJobOpToolsByCodeNotIn(
        ops_data,
        connection
      );
      for (let tools_data of ops_data.job_op_tools) {
        if (tools_data.job_op_tools_code == "") {
          let last_code = await jobopmtools_model.getJobOpToolsLastCode(
            {
              code: `JOBOPTOOLS${now.getFullYear()}${(now.getMonth() + 1)
                .toString()
                .padStart(2, "0")}`,
              digit: 4,
            },
            connection
          );

          tools_data.job_op_tools_code = last_code.data;
          tools_data.job_op_code = ops_data.job_op_code;

          trans.insert3 = await jobopmtools_model.insertJobOpTools(
            tools_data,
            connection
          );
        } else {
          trans.update4 = await jobopmtools_model.updateJobOpToolsBy(
            tools_data,
            connection
          );
        }

        trans.del4 = await jobopmtoolsuse_model.deleteJobOpToolsUsesByCodeNotIn(
          tools_data,
          connection
        );
        for (tools_data_use of tools_data.job_op_tools_uses) {
          if (tools_data_use.job_op_tools_use_code == "") {
            let last_code =
              await jobopmtoolsuse_model.getJobOpToolsUsesLastCode(
                {
                  code: `JOBOPMC${now.getFullYear()}${(now.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}`,
                  digit: 4,
                },
                connection
              );
            tools_data_use.job_op_tools_use_code = last_code.data;
            tools_data_use.job_op_tools_code = tools_data.job_op_tools_code;
            trans.insert5 = await jobopmtoolsuse_model.insertJobOpToolsUses(
              tools_data_use,
              connection
            );
          } else {
            trans.update5 = await jobopmtoolsuse_model.updateJobOpToolsUsesBy(
              tools_data_use,
              connection
            );
          }
        }
      }
    }

    return next(trans);
  });
  connection.release();
  return result;
};
Task.deleteJobByCode = async function deleteJobByCode(data) {
  const trans = [];

  const result = await inTransaction(async (connection, next) => {
    trans.del1 = await job_model.hideJobByCode(data, connection);

    return next(trans);
  });
  connection.release();
  return result;
};

module.exports = Task;
