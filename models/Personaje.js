'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personaje.belongsTo(models.Pelicula,{
        foreignKey: 'pelicula_id',
        targetKey: 'id'
      })
    }
  }
  Personaje.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.STRING,
    pelicula_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};