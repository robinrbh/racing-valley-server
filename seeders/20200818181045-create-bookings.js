"use strict"
const Racer = require("../models").racer

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const racer1 = await Racer.findOne({
			where: { email: "max@max.com" },
		})

		const racer2 = await Racer.findOne({
			where: { email: "lewis@lewis.com" },
		})

		const car1 = await Car.findOne({
			where: { }
		})

		await queryInterface.bulkInsert(
			"bookings",
			[
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					racerId: racer1.id,
				},
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					racerId: racer2.id,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("bookings", null, {});
	},
}
