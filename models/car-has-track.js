"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carHasTrack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carHasTrack.belongsTo(models.car);
      carHasTrack.belongsTo(models.track);
    }
  }
  carHasTrack.init(
    {
      carId: DataTypes.INTEGER,
      trackId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "carHasTrack",
    }
  );
  return carHasTrack;
};