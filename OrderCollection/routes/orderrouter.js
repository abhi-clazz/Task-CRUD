module.exports = app => {
    const orders = require("../controller/ordercontroller.js");

    var router = require("express").Router();

    router.post("/", orders.create);

    router.get("/", orders.findAll);
    router.get("/userreport", orders.reportByUser);

    router.get("/outletreport", orders.reportByOutlet);
    router.get("/productreport", orders.reportByProduct);


    router.get("/:id", orders.findOne);

    router.put("/:id", orders.update);

    router.delete("/:id", orders.delete);

    router.delete("/", orders.deleteAll);

    app.use('/api/orders', router);
};