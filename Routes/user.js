const express = require('express');
const router = express.Router();
const controller = require('../Controllers/userController');
const { auth } = require('../Middleware/auth');

router.post('/login', controller.login);
router.post('/forgetpassword', controller.forgetpassword);
router.put('/resetpassword/:resetToken', controller.resetpassword);
router.post('/contact', controller.contact);
router.get('/getalldata', auth, controller.getalldata);
router.get('/degreevalidation', controller.degreeValidation)

module.exports = router;
