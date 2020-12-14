module.exports = (sequelize, Sequelize) => {


    const Booking = sequelize.define("booking", {
      userID: {
        type: Sequelize.INTEGER
      },
      spotID: {
        type: Sequelize.INTEGER
      },
      climateID: {
        type: Sequelize.INTEGER
      }
    },
    {
      // options
      timestamps: true,
      hasTrigger: true
    }
  );


    return Booking;
  };
