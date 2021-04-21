module.exports = app => {
    const outlets = require("../controller/outletcontroller.js");
  
    var router = require("express").Router();
  
    router.post("/", outlets.create);
  
    router.get("/", outlets.findAll);
  

  
    router.get("/:id", outlets.findOne);
  
    router.put("/:id", outlets.update);
  
    router.delete("/:id", outlets.delete);
  
    router.delete("/", outlets.deleteAll);
  
    app.use('/api/outlets', router);
  };