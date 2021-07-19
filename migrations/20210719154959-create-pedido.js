'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.INTEGER
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
      enderecoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'enderecos',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
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
    await queryInterface.dropTable('Pedidos');
  }
};