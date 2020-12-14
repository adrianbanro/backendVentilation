module.exports = (sequelize, Sequelize) => {


    const Spot = sequelize.define("spot", {
      spot: {
        type: Sequelize.INTEGER
      },
      room: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.STRING
      },
      building: {
        type: Sequelize.STRING
      }
    }


  );


    return Spot;
  };
