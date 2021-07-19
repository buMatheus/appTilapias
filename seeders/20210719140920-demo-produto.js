'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('produtos', [{
      nome: 'Filé de Tilápia',
      descricao: 'Carne de tilápia congelada estilo filé com peso liquido de 500g',
      valor: '17.99',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produtos', null, {});
  }
};