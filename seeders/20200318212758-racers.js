"use strict"
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = require("../config/constants")
const Booking = require("../models").booking

module.exports = {
	up: async (queryInterface, Sequelize) => {
		
		const booking1 = await Booking.findOne({
			where: { orderDate: "01/09/2020" },
		})

		const booking2 = await Booking.findOne({
			where: { orderDate: "02/09/2020" },
		})

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
