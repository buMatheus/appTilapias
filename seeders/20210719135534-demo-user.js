'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'Matheus',
      lastName: 'Alves',
      email: 'bu.Matheus@gmail.com',
      userName: 'bu.Matheus',
      password: '888',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
