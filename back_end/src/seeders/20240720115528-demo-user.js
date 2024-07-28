'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('User', [
      {
        email: 'John Doe',
        password: '12345',
        username: 'John'
     },
     {
      email: 'John Doe1',
      password: '12345',
      username: 'John1'
    },
    {
      email: 'John Doe2',
      password: '12345',
      username: 'John2'
   },
   {
    email: 'John Doe3',
    password: '12345',
    username: 'John3'
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
