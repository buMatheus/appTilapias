'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enderecos', [{
      estado: 'MG',
      cidade: 'Florestal',
      bairro: 'Centro',
      cep: '35690000',
      logradouro: 'Rua Benedito Valadares',
      numero: '228',
      complemento: '',
      activity: false,
      userId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('enderecos', null, {});
  }
};