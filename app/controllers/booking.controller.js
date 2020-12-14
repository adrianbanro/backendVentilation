const db = require("../models");
const Booking = db.booking;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  //if (!req.body.title) {

  /*
  if (!req.body.spotID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/
  // Create a Tutorial
  const booking = {
    spotID: req.body.spotID,
    userID: req.body.userID,
    climateID: req.body.climateID,
    createdAt:req.body.createdAt,
    updatedAt:req.body.updatedAt
  //  title: req.body.title,
  //  description: req.body.description,
  //  published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Booking.create(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reservation."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const query = req.query;
    console.log("req.query 5353 : ", req.query);

/*
const building = req.query.building;
const floor = req.query.floor;
const room = req.query.room;
console.log("room : ", room);
*/

    Booking.findAll({ where: query })
    //Spot.findAll({ where: { building: building, floor: floor, room: room} })
      .then(data => {
        res.send(data);
        console.log("data QWQW : ", data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bookings."
        });
      });

};
