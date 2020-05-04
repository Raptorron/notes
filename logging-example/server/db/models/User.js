const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;
const db = require('../db');

///////////////////////////** 1 **///////////////////////////////////

const User = db.define('user', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: STRING,
    allowNull: false
  }
});

module.exports = User;
