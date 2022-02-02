'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {

    static associate(models) {
      Pelicula.hasMany(models.Personaje, {
        foreignKey: 'pelicula_id'
      })
      Pelicula.belongsTo(models.Genero, {
        foreignKey: 'id',
        targetKey: 'genero_id'
      })
    }
  }
  Pelicula.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    titulo: DataTypes.STRING,
    imagen: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    calificacion: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};