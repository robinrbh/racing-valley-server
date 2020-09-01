"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class track extends Model {
		static associate(models) {
			track.belongsTo(models.booking)
		}
	}
	track.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			city: { type: DataTypes.STRING, allowNull: false },
			country: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "track",
		}
	)
	return track
}
