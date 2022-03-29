const config = require("../configs/auth.config");
const jwt = require("jsonwebtoken");

const connect = require("../models/BaseModel");

const user_model = require("../models/UserModel");
const permission_model = require("../models/PermissionModel");

exports.signin = async (req, res) => {
  const connection = await connect();

  const user = await user_model.checkLogin(req.body, connection);

  if (user.require === false || user.data.length === 0) {
    connection.release();
    res.send(user);
  } else {
    const permissions = await permission_model.getPermissionBy(
      { license_code: user.data[0].license_code },
      connection
    );

    if (permissions.require) {
      user.x_access_token = jwt.sign(
        { user_code: user.data[0].user_code },
        config.secret,
        { expiresIn: 80000 }
      );
      user.permissions_token = jwt.sign(
        { permissions: permissions.data },
        config.secret,
        { expiresIn: 80000 }
      );
    }

    connection.release();
    res.send(user);
  }
};
exports.signinRFID = async (req, res) => {
  const connection = await connect();

  const user = await user_model.checkLoginRFID(req.body, connection);

  if (user.require === false || user.data.length === 0) {
    connection.release();
    res.send(user);
  } else {
    const permissions = await permission_model.getPermissionBy(
      { license_code: user.data[0].license_code },
      connection
    );

    if (permissions.require) {
      user.x_access_token = jwt.sign(
        { user_code: user.data[0].user_code },
        config.secret,
        { expiresIn: 8000 }
      );
      user.permissions_token = jwt.sign(
        { permissions: permissions.data },
        config.secret,
        { expiresIn: 8000 }
      );
    }

    connection.release();
    res.send(user);
  }
};
