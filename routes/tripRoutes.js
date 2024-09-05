const express = require('express');
const { createTrip, getTrips, updateTrip, deleteTrip } = require('../controllers/tripController');
const router = express.Router();

// Define the routes for the trip
router.post('/', createTrip);     // POST to create a new trip
router.get('/', getTrips);        // GET to fetch all trips
router.put('/:id', updateTrip);   // PUT to update a specific trip
router.delete('/:id', deleteTrip); // DELETE to remove a specific trip

module.exports = router;
