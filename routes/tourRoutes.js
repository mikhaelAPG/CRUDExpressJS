const express = require('express');
const tourController = require('./../controllers/tourControllers');

const router = express.Router();

router
.route('/')
.post(tourController.createTour) // fungsinya nanti akan kita implement
.get(tourController.getAllTours); // fungsinya nanti akan kita implement

// router
// .route('/:id')
// .get(tourController.getTour) // fungsinya nanti akan kita implement
// .patch(tourController.updateTour) // fungsinya nanti akan kita implement
// .delete(tourController.deleteTour); // fungsinya nanti akan kita implement

module.exports = router;