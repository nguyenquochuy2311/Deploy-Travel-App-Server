"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return Promise.all([queryInterface.addColumn('Users', 'user_avatar', {
      type: Sequelize.STRING
    })]);
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('Users', 'user_avatar')]);
  }
};