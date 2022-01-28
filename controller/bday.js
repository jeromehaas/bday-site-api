const db = require('../config/db');
const BdayModel = require('../models/bday-model');

const getAllBdayEntries = async ( req, res ) => {
	try {

		// FETCH ALL ENTRIES
		const data = await BdayModel.findAll();
		console.log('🟢 get all entries')
		return res
			.status(200)
			.send(data);

	} catch (error) {

		// ERROR HANDLING
		console.log('🔴 get all entries')
		console.log(error)
		res
			.status(500)
			.send(error);
	}
}

const getBdayEntryById = async ( req, res ) => {
	try {

		// CREATE NEW ENTRY
		const id = req.params.id;
		const data = await BdayModel.findAll({
			where: {
				id: id
			}
		});
		console.log('🟢 get entry by id')
		return res
			.status(200)
			.send(data);

	} catch (error) {

		// ERROR HANDLING
		console.log('🔴 get entry by id')
		return res
			.status(500)
			.send(error);
	}
}

const createBdayEntry = async ( req, res ) => {
	try {

		// GET DATA FROM BODY
		const { firstname, lastname, day, month, year } = req.body;
		console.log(firstname, lastname, day, month, year)

		// CHECK INPUTS
		const errors = [];
		if (!firstname) errors.push({ text: 'firstname not defined' });
		if (!lastname) errors.push({ text: 'lastname not defined' });
		if (!day) errors.push({ text: 'day not defined' });
		if (!month) errors.push({ text: 'month not defined' });
		if (!year) errors.push({ text: 'year not defined' });
		if (errors.length) {
			throw new Error('🔴 create entry');
		}

		// CREATE ENTRY
		await BdayModel.create({
			firstname, 
			lastname, 
			day, 
			month, 
			year
		});
		console.log('🟢 create entry');

		// SEND ALL ENTRIES AS ANSWER
		const data = await BdayModel.findAll();
		return res
			.status(200)
			.send(data);
		
	} catch (error) {

		// ERROR HANDLING
		console.log('🔴 create entry');
		return res
			.status(500)
			.send(error);
	}
}

const deleteBdayEntry = async ( req, res ) => {
	try {

		// GET ID FROM BODY
		const id = req.params.id;

		// CHECK INPUTS
		const errors = [];
		if (!id) errors.push({ text: 'id not defined' });
		if (errors.length) {
			throw new Error('invalid Input');
		}

		// UPDATE ENTRY
		await BdayModel.destroy({
			where: {
				id: id
			}
		});
		console.log('🟢 delete entry')

		// SEND ALL ENTRIES AS ANSWER
		const data = await BdayModel.findAll();
		res.send(data);

	} catch (error) {

		// ERROR HANDLING
		console.log('🔴 delete entry');
		res
			.status(500)
			.send(error);
	}
}

module.exports = {
	getAllBdayEntries, 
	getBdayEntryById,
	createBdayEntry,
	deleteBdayEntry
}