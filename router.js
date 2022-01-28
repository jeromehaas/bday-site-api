const express = require('express');
const Router = express.Router;
const router = new Router();
const { getAllBdayEntries, getBdayEntryById, createBdayEntry, deleteBdayEntry} = require('./controller/bday');


router.get('/', getAllBdayEntries);

router.get('/:id', getBdayEntryById);
	
router.post('/', createBdayEntry);

router.delete('/:id', deleteBdayEntry);

module.exports = router;


