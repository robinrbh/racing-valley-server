"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("bookings", "carId", {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: "cars",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("bookings", "carId")
	},
}
