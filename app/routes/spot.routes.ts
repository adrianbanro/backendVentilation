module.exports = app => {
    const tutorialz = require("../controllers/spot.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorialz.create);

    // Retrieve all Tutorials
    router.get("/", tutorialz.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorialz.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorialz.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorialz.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorialz.delete);

    // Create a new Tutorial
    router.delete("/", tutorialz.deleteAll);

    app.use('/api/spots', router);
  };
