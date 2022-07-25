module.exports = app => {
    const controllers = require("../controllers/age.controllers")
    var router = require("express").Router();
    router.get("/date_birth", controllers.calc_age_by_date_birth);
    router.get("/difference_between_ages", controllers.calc_difference_between_ages);
    app.use('/api/age', router);
}