'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      activity: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Enderecos');
  }
};