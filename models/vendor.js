"use strict"

const { Model, BOOLEAN } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class vendor extends Model {
		static associate(models) {
			vendor.hasMany(models.car)
			vendor.hasMany(models.rating)
		}
	}
	vendor.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			imageUrl: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "vendor",
		}
	)
	return vendor
}
