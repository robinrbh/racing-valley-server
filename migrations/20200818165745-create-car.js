"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("cars", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			brand: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			model: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			bhp: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			gearbox: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			imageUrl: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("cars")
	},
}
