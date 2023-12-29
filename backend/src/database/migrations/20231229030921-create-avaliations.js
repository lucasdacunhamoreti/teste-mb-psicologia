'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resultado', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      bimestre: {
        type: Sequelize.ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'),
        allowNull: false
      },
      disciplina: {
        type: Sequelize.ENUM('Biologia', 'Artes', 'Geografia', 'Sociologia'),
        allowNull: false
      },
      nota: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('resultado');
  }
};
