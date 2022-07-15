module.exports = app => {
    const controllers = require("../controllers/main.controllers");
    var router = require("express").Router();
    router.get("/generate", controllers.generate);
   
    app.use('/api/random', router);
  };