const db = require("../models");
const Climate = db.climate;
const Spot = db.spot;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  //if (!req.body.title) {
  if (!req.body.roomName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const climate = {
    roomName: req.body.roomName,
    temperature: req.body.temperature,
    humidity: req.body.humidity,
  //  title: req.body.title,
  //  description: req.body.description,
  //  published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Climate.create(climate)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
/*exports.findAll = (req, res) => {
    const query = req.query;
    console.log("req.query : ", req.query);

    //const request = req;
    //console.log("request : ", request);

    //var condition = title ? { spot: { [Op.like]: `%${spot}%` } } : null;
    //Climate.findAll({ where: condition })

    Spot.findAll()
      .then(data => {
        res.send(data);
        console.log("data 123987 : ", data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });

};
*/
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const query = req.query;
    console.log("req.query 4646 : ", req.query);

const building = req.query.building;
const floor = req.query.floor;
const room = req.query.room;
console.log("room : ", room);
//const roomName = req.query.roomName;
//console.log("roomName : ", roomName);
    //const request = req;
    //console.log("request : ", request);

//var condition = title ? { spot: ${spot} } } : null;

  //  var condition = spot ? { spot: { [Op.like]: `%${spot}%` } } : null;
    //Climate.findAll({ where: condition })

/*
var _building = building ?  "building: { [Op.like]: `%${building}%` }"  : null;

var _floor = floor ?  'floor: { [Op.like]: `%${floor}%` }'  : null;

var _room = room ?  'room: { [Op.like]: `%${room}%` }'  : null;

let str = 'Hello';
str += ' ';
str += 'World';
str; // 'Hello World'

//var condition = {_building + _floor + _room}
var condition = '{';
condition += _building;
condition +=', ';
condition += _floor;
condition +=', ';
condition += _room;
condition += '}';

console.log("condition : ", condition);
*/
    //Spot.findAll({ where: { building: building, floor: floor, room: room} })
    Spot.findAll({ where: query })
    //Spot.findAll({ where: { building: building, floor: floor, room: room} })
      .then(data => {
        res.send(data);
        console.log("data 123987 : ", data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });

};



// Find a single Tutorial with an id
exports.findOne = (req, res) => {

  console.log("req.params : ", req.params)
    const id = req.params.id;
console.log("id : ", id)

    Spot.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Climate.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Climate.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Climate.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Climate.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};
