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
        foreignKey: 'genero_id',
        targetKey: 'id'
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
    genero_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};