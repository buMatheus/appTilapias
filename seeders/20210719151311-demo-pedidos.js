'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pedidos', [{
      valor: '33.00',
      status: '0',
      UserId: '1',
      EnderecoId: '1',
      ItemId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pedidos', null, {});
  }
};