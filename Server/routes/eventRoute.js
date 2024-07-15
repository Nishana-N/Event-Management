const express = require('express');
const router = express.Router();
const { protect } = require('../Middleware/auth.js');
const {
    getEvent,
    addEvent,
    updateEvent,
    deleteEvent,
    searchEvent,
    filterEvent
} = require('../controllers/eventController.js');

router.route('/')
    .get(getEvent)
    .post(protect, addEvent);

router.route('/:id')
    .put(protect, updateEvent)
    .delete(protect, deleteEvent);

router.get('/search', searchEvent);
router.get('/filter', filterEvent);

module.exports = router;