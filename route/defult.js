const router = require('express').Router();
const bookingController = require('../controller/bookingController')
const bookingValidation = require('../validation/booking')

router.post('/booking',bookingValidation.validateBookingData, bookingController.bookCab);
router.post('/end',bookingValidation.validateEndBookData, bookingController.endBooking);


//global export
module.exports = router;
