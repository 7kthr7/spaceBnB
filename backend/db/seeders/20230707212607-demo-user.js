"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
};


module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      
      [
       
        {
          firstName: "Jeff",
          lastName: "Bezos |||",
          email: "BezosDaThird@gmail.com",
          username: "DaBetter_Bezos",
          hashedPassword: bcrypt.hashSync("password1"),
        },
        {
          firstName: "Elon",
          lastName: "Musk |||",
          email: "MuskDaThird@gmail.com",
          username: "MuskDaGoat",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          firstName: "Zhang",
          lastName: "Yiming",
          email: "YimingDaThirde@gmail.com",
          username: "Za_Zhang",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: 'demo@user.io',
          username: 'Demo-G',
          firstName: 'Demo',
          lastName: 'User',
          hashedPassword: bcrypt.hashSync("password")
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ["DaBetter_Bezos", "MuskDaGoat", "Za_Zhang", "Demo_G"] },
      },
      {}
    );
  },
};
