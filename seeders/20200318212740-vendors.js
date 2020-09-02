"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"vendors",
			[
				{
					businessName: "Porsche4Track",
					email: "p@p.com",
					password: bcrypt.hashSync("p", SALT_ROUNDS),
					imageUrl:
						"https://w7.pngwing.com/pngs/168/25/png-transparent-porsche-911-car-porsche-boxster-cayman-porsche-cayenne-porsche-angle-text-logo-thumbnail.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					businessName: "TrackBMWs",
					email: "b@b.com",
					password: bcrypt.hashSync("b", SALT_ROUNDS),
					imageUrl:
						"https://w7.pngwing.com/pngs/168/25/png-transparent-porsche-911-car-porsche-boxster-cayman-porsche-cayenne-porsche-angle-text-logo-thumbnail.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("vendors", null, {})
	},
}
