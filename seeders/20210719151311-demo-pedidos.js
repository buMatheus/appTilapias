'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pedidos', [{
      valor: '33.00',
      status: '0',
      userId: '1',
      enderecoId: '1',
      itemId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pedidos', null, {});
  }
};