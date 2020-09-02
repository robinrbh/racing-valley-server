"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"tracks",
			[
				{
					name: "Nürburgring Nordschleife",
					city: "Nürburg",
					country: "DE",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Circuit Park Zandvoort",
					city: "Zandvoort",
					country: "NL",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Autodromo Nazionale Monza",
					city: "Monza",
					country: "IT",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Spa-Franchorchamps",
					city: "Spa",
					country: "BE",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Ascari Race Resort",
					city: "Ronda",
					country: "ES",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("tracks", null, {})
	},
}
