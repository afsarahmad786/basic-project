const Sequelize = require("sequelize");
const database = require("../util/database");

const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  status: Sequelize.BOOLEAN,

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: {
      args: true,
      msg: "Email address already in use!",
    },
  },
});

module.exports = User;
