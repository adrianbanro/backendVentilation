module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("climate", {
      roomName: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      humidity: {
        type: Sequelize.INTEGER
      }
    });

    const Spot = sequelize.define("spot", {
      spot: {
        type: Sequelize.INTEGER
      },
      roomName: {
        type: Sequelize.STRING
      },
      building: {
        type: Sequelize.STRING
      }
    });


    return Tutorial;
  };


/*
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  published: {
    type: Sequelize.BOOLEAN
  }
  */
