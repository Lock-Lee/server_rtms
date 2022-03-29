const { authJwt } = require("../middlewares");
const ReceiveTool = require("../controllers/ReceiveToolController");

module.exports = function (app) {
  app.post(
    "/receivetool/ReceiveTools",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await ReceiveTool.ReceiveTools(req.body);
      res.send(result);
    }
  );
};
