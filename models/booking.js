"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class booking extends Model {
		static associate(models) {
      booking.belongsTo(models.track), 
      booking.hasMany(models.bid)
		}
	}
	booking.init(
		{
			orderDate: { type: DataTypes.DATE },
		},
		{
			sequelize,
			modelName: "booking",
		}
	)
	return booking
}
