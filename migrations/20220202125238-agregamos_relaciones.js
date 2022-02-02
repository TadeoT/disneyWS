'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Peliculas','genero_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Generos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: null
    })
    await queryInterface.addColumn('Personajes','pelicula_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Peliculas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: null
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Peliculas','genero_id')
    await queryInterface.removeColumn('Personajes','pelicula_id')
  }
};
