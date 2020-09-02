"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class car extends Model {
		static associate(models) {
			car.belongsTo(models.vendor),
				car.hasMany(models.booking),
				car.belongsToMany(models.track, {
					through: "carHasTrack",
					foreignKey: "carId",
				})
		}
	}
	car.init(
		{
			brand: { type: DataTypes.STRING, allowNull: false },
			model: { type: DataTypes.STRING, allowNull: false },
			bhp: { type: DataTypes.INTEGER, allowNull: false },
			description: { type: DataTypes.TEXT },
			gearbox: { type: DataTypes.STRING },
			imageUrl: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "car",
		}
	)
	return car
}
