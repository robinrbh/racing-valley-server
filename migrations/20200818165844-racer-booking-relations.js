"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("bookings", "racerId", {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: "racers",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("bookings", "racerId")
	},
}
