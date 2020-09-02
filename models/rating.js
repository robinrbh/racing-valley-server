"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class rating extends Model {
		static associate(models) {
			rating.belongsTo(models.vendor)
		}
	}
	rating.init(
		{
			comment: { type: DataTypes.TEXT, allowNull: false },
			rating: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "rating",
		}
	)
	return rating
}
