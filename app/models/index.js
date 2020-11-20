const Sequelize = require("sequelize");
const sequelize = new Sequelize('ventilation_db', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.climate = require("./ventilation.model.js")(sequelize, Sequelize);

module.exports = db;
