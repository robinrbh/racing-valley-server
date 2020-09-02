"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("bookings", "trackId", {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: "tracks",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("bookings", "trackId")
	},
}
