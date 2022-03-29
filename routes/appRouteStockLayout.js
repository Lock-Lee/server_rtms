const { authJwt } = require("../middlewares");
const stock_layout_controller = require("../controllers/StockLayoutController");

module.exports = function (app) {
  app.post(
    "/stock_layout/generateClassByStockLayoutCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await stock_layout_controller.generateClassByStockLayoutCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/getStockLayout",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getStockLayout(req.body);
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getStockLayoutByGroup",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getStockLayoutByGroup(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/insertStockLayoutCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.insertStockLayoutCode(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/getProductBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getProductBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/getSuppliersBy",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getSuppliersBy(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/getProductByCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getProductByCode(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/getSuppliersByProductCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getSuppliersByProductCode(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/updateStockLayout",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.updateStockLayout(req.body);
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/deleteStockLayoutByStockYCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result =
        await stock_layout_controller.deleteStockLayoutByStockYCode(req.body);
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getCountReserve",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getCountReserve(req.body);
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getResevedSlotbyCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getResevedSlotbyCode(
        req.body
      );
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getMaxSlotbyCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getMaxSlotbyCode(
        req.body
      );
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getMaxSlotisResevedbyCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getMaxSlotisResevedbyCode(
        req.body
      );
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getMaxSlotisCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getMaxSlotisCode(req.body);
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getCountReserveBycode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getCountReserveBycode(
        req.body
      );
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getRemainSlotbyCode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getRemainSlotbyCode(
        req.body
      );
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getCountReserveBycode",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getCountReserveBycode(
        req.body
      );
      res.send(result);
    }
  );

  app.post(
    "/stock_layout/getSlotisNull",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getSlotisNull(req.body);
      res.send(result);
    }
  );
  app.post(
    "/stock_layout/getResevedSlotisNull",
    authJwt.verifyToken,
    async function (req, res) {
      const result = await stock_layout_controller.getResevedSlotisNull(
        req.body
      );
      res.send(result);
    }
  );
};
