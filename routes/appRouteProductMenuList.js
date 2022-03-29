const { authJwt } = require("../middlewares");
const productMenuList_controller = require("../controllers/ProductMenuListController");

module.exports = function (app) {


  app.post("/product-menulist/getproductMenuListBy", authJwt.verifyToken, async function (req, res) {
    const result = await productMenuList_controller.getproductMenuListBy(req.body);
    res.send(result);
  });

  app.post("/product-menulist/getproductMenuListByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productMenuList_controller.getproductMenuListByCode(req.body);
    res.send(result);
  });

  app.post("/product-menulist/getProductByProductMenuName", authJwt.verifyToken, async function (req, res) {
    const result = await productMenuList_controller.getProductByProductMenuName(req.body);
    res.send(result);
  });

  app.post("/product-menulist/InsertORUpdateProductListMenu", authJwt.verifyToken, async function (req, res) {
    const result = await productMenuList_controller.InsertORUpdateProductListMenu(req.body);
    res.send(result);
  });

  app.post("/product-menulist/deleteProductMenutlistByCode", authJwt.verifyToken, async function (req, res) {
    const result = await productMenuList_controller.deleteProductMenutlistByCode(req.body);
    res.send(result);
  });



  // app.post("/product-menu/updateProducMenuByCode", authJwt.verifyToken, async function (req, res) {
  //   const result = await productmenu_controller.updateProductMenuByCode(req.body);
  //   res.send(result);
  // });

  // app.post("/product/getProductByCode", authJwt.verifyToken, async function (req, res) {
  //   const result = await product_controller.getProductByCode(req.body);
  //   res.send(result);
  // });


  // app.post("/product/getProductByGroup", authJwt.verifyToken, async function (req, res) {
  //   const result = await product_controller.getProductByGroup(req.body);
  //   res.send(result);
  // });

  // app.post("/product/getProductByType", authJwt.verifyToken, async function (req, res) {
  //   const result = await product_controller.getProductByType(req.body);
  //   res.send(result);
  // });


};
