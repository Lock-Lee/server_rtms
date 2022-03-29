const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config.js");

module.exports = {
  verifyToken: (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).send({
        data: [],
        require: false,
        unauthorized: true,
        error: "No token provided!",
      });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          data: [],
          require: false,
          unauthorized: true,
          error: "Unauthorized!",
        });
      }

      next();
    });
  },
};
