const connect = require('../models/BaseModel')

const inTransaction = async (body) => {
  const connection = await connect()

  connection.beginTransaction()

  try {
    return body(connection, function (trans) {
      const data_trans = []

      for (let key in trans) {
        if (trans[key].require) {
          data_trans.push(trans[key].data)
        } else {
          connection.rollback()
          connection.release()

          return { data: trans[key], err: trans[key].err, require: false, }
        }
      }

      connection.commit()
      connection.release()

      return { data: data_trans, err: '', require: true, }
    })
  } catch (err) {
    connection.rollback()
    connection.release()

    return { data: [], err: err, require: false, }
  }
}

module.exports = inTransaction