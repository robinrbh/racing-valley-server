"use strict"
const Racer = require("../models").racer
const Car = require("../models").car
const Track = require("../models").track

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const racer1 = await Racer.findOne({
			where: { email: "max@max.com" },
		})

		const racer2 = await Racer.findOne({
			where: { email: "lewis@lewis.com" },
		})

		const car1 = await Car.findOne({
			where: { model: "Cayman GT4" },
		})

		const car2 = await Car.findOne({
			where: { model: "911 GT3" },
		})

		const track1 = await Track.findOne({
			where: { name: "Circuit Park Zandvoort" },
		})

		const track2 = await Track.findOne({
			where: { name: "Spa-Franchorchamps" },
		})

		await queryInterface.bulkInsert(
			"bookings",
			[
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					orderDate: "01/09/2020",
					racerId: racer1.id,
					carId: car1.id,
					trackId: track1.id,
				},
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					orderDate: "02/09/2020",
					racerId: racer2.id,
					carId: car2.id,
					trackId: track2.id,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("bookings", null, {})
	},
}
