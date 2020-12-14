module.exports = app => {
    const tutorialz = require("../controllers/ventilation.controller.js");
const tutorialz22 = require("../controllers/spot.controller.js");
const booking = require("../controllers/booking.controller.js");


    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorialz.create);

    // Retrieve all Tutorials
    router.get("/", tutorialz.findAll);

    // Create a new Reservation
    router.post("/bookings", booking.create);

    // Retrieve all Tutorials
    router.get("/bookings", booking.findAll);

    // Retrieve all Tutorials
    router.get("/spots", tutorialz22.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorialz.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorialz.findOne);

    // Retrieve a single Tutorial with id
    router.get("/spots/:id", tutorialz22.findOne);

    // Retrieve a single Tutorial with id
    router.get("/spots/:building/:room/:id", tutorialz22.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorialz.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorialz.delete);

    // Create a new Tutorial
    router.delete("/", tutorialz.deleteAll);

    app.use('/api/tutorials', router);
    //app.use('/api/spots', router);
  };
