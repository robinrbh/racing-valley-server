"use strict"

const { Model, BOOLEAN } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class racer extends Model {
		static associate(models) {
			racer.hasMany(models.booking)
		}
	}
	racer.init(
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
			modelName: "racer",
		}
	)
	return racer
}
