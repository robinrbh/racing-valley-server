"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("ratings", "vendorId", {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: "vendors",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("ratings", "vendorId")
	},
}
