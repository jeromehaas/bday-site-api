const { Sequelize } = require('../config/db');
const db = require('../config/db');

const BdayModel = db.define('bdays', {
	id: {
		field: 'id',
		type: Sequelize.INTEGER, 
		primaryKey: true
	},
	firstname: {
		field: 'firstname', 
		type: Sequelize.STRING
	},
	lastname: {
		field: 'lastname',
		type: Sequelize.STRING,
	},	
	day: {
		field: 'day',
		type: Sequelize.INTEGER
	},
	month: {
		field: 'month',
		type: Sequelize.INTEGER
	},
	year: {
		field: 'year',
		type: Sequelize.INTEGER
	},
});

module.exports = BdayModel;