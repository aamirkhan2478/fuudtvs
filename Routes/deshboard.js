const express = require('express');
const router = express.Router();
const controller = require('../Controllers/deshboardController');
const { check } = require('express-validator');

//Admin Routes
router.post('/admin/adduser', controller.addUser);
router.put('/admin/updateuser/:id', controller.updateUser);
router.delete('/admin/deleteuser/:id', controller.deleteUser);
router.post('/admin/adddepartment', controller.addDepartment);
router.put('/admin/updatedepartment/:id', controller.updateDepartment);
router.delete('/admin/deletedepartment/:id', controller.deleteDepartment);
router.get('/admin/getallstudent', controller.getAllStudent);
router.get('/admin/getallstudent/:id', controller.getAllStudentById);
router.get('/admin/getalluser', controller.getAllUser);
router.get('/admin/getalluser/:id', controller.getAllUserById);
router.get('/admin/getalldepartment', controller.getAllDepartment);
router.get('/admin/getalldepartment/:id', controller.getAllDepartmentById);
router.get('/admin/degreeapplication', controller.degreeApplication);
router.put('/admin/uploadfeechalan/:id', controller.uploadChalan);
router.put('/admin/updatestatus/:id', controller.updateStatus);
router.get('/admin/viewfeedback', controller.viewFeedback);
router.get('/admin/viewcontactus', controller.viewContactus); 

//Student Routes
router.post('/student/applyapplication', controller.applyApplication);
router.get('/student/showchalan', controller.showChalan);
router.post('/student/sendfeedback', controller.sendFeedback);
router.get('/student/status', controller.Status)
 
//User Routes
router.get('/user/approveapplication', controller.approveApplication);

//Count Routes
router.get('/count/appliedapplication', controller.appliedApplication);
router.get('/count/approvedapplication', controller.approvedApplication);

//Change Password Route
router.put('/user/changepassword/:id', controller.changePassword)

module.exports = router;
