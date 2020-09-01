"use strict"

const { Model, BOOLEAN } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class vendor extends Model {
		static associate(models) {
			vendor.hasMany(models.cars)
			vendor.hasMany(models.ratings)
		}
	}
	vendor.init(
		{
			businessName: {
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
      }
		},
		{
			sequelize,
			modelName: "vendor",
		}
	)
	return vendor
}
