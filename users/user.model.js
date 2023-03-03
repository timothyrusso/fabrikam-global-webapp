const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    birthDay: { type: DataTypes.DATEONLY, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATEONLY, allowNull: false },
    endDate: { type: DataTypes.DATEONLY, allowNull: true, defaultValue: null },
    addressOne: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    addressTwo: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    city: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    province: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  };

  return sequelize.define('User', attributes);
}
