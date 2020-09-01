"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"racers",
			[
				{
					firstName: "Max",
					lastName: "Verstappen",
					email: "max@max.com",
					password: bcrypt.hashSync("max", SALT_ROUNDS),
					imageUrl:
						"https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image16x9.img.1536.high.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Lewis",
					lastName: "Hamilton",
					email: "lewis@lewis.com",
					password: bcrypt.hashSync("lewis", SALT_ROUNDS),
					imageUrl:
						"https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1593685990514.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("racers", null, {})
	},
}
