"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 1,
          address: "123 E Main St",
          city: "New York City",
          state: "New York",
          country: "United States",
          lat: 40.40,
          lng: -80.80,
          name: "The Earth Residences",
          description:
            "Experience the wonders of our diverse and vibrant world as you immerse yourself in this retro-inspired apartment nestled in the heart of New York City.",
          price: 100,
        },
        {
          ownerId: 2,
          address: "38 Hillhouse Ave",
          city: "RedVille",
          state: "Mudlanta",
          country: "Mars Symphony Suites",
          lat: 40.40,
          lng: -80.80,
          name: "Mars",
          description:   
"Immerse yourself in the wonders of this Red Planet oasis, where advanced technology and sustainable living coexist harmoniously. ",
          price: 200,
        },
        {
          ownerId: 3,
          address: "200 Meadow Ln",
          city: "Aurelia",
          state: "Novastorm",
          country: "Jupiter",
          lat: 40.40,
          lng: -80.80,
          name: "Jupiter Towers",
          description:
            "Welcome to my extraordinary apartment on Jupiter, where you can experience the wonders of living on the largest planet in our solar system. ",
          price: 300,
        },
        {
          ownerId: 1,
          address: "123 E Main St",
          city: "Stardale",
          state: "Celestria",
          country: "Saturn",
          lat: 40.40,
          lng: -80.80,
          name: "Saturn Heights",
          description:
            "Welcome to the enchanting realm of Saturn, where a stunning house awaits you amidst the celestial beauty of its rings. ",
          price: 100,
        },
        {
          ownerId: 2,
          address:  "2345 Ocean Dr",
          city: "Nebulos",
          state: "Lumina",
          country: "Urania",
          lat: 40.40,
          lng: -80.80,
          name: "Uranus Gardens",
          description:
            "Welcome to a realm of whimsical wonder on the mysterious planet of Uranus.  ",
          price: 200,
        },
        {
          ownerId: 3,
          address: "678 Forrestview ln",
          city: "Aquatica",
          state: "Oceania",
          country: "Neptunia",
          lat: 40.40,
          lng: -80.80,
          name: "Neptune Oasis",
          description:
            "Dive into the ethereal depths of Neptune, where an extraordinary escape awaits you.",
          price: 300,
        },
        {
          ownerId: 3,
          address: "678 Forrestview ln",
          city: "Lunaris",
          state: " Harmonia",
          country: "Moon",
          lat: 40.40,
          lng: -80.80,
          name: "The Moon Apartments",
          description:
            "Embark on a lunar adventure like no other, as you step foot onto the mystical surface of the Moon.",
          price: 300,
        },
        {
          ownerId: 1,
          address: "678 Forrestview ln",
          city: "Frostholm",
          state: "Heliopolis",
          country: "Plutonia",
          lat: 40.40,
          lng: -80.80,
          name: "Pluto Retreat",
          description:
            "Journey to the edge of our solar system and discover the enigmatic world of Pluto. ",
          price: 300,
        }
        

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        lat: { [Op.in]: [40.40] },
      },
      {}
    );
  },
};
