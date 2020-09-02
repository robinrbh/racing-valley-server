"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "carHasTracks",
      [
        {
          carId: 1,
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          carId: 1,
          trackId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          carId: 2,
          trackId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          carId: 2,
          trackId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          carId: 3,
          trackId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          carId: 4,
          trackId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("carHasTracks", null, {});
  },
};