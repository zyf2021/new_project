module.exports = app => {
    const controllers = require("../controllers/main.controllers");
    var router = require("express").Router();
    router.get("/generate", controllers.generate);
    router.get("/generate_between", controllers.generate_between);
   
    app.use('/api/random', router);
  };