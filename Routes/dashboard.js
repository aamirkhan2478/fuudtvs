const express = require("express");
const router = express.Router();
const controller = require("../Controllers/dashboardController");
const multer = require("multer");
const authRole = require("../Middleware/checkRole");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploads = multer({ storage: storage });

//Admin Routes
router.post("/admin/adduser", authRole(["Admin"]), controller.addUser);
router.post("/admin/addstudent", authRole(["Admin"]), controller.addStudent);
router.put("/admin/updateuser/:id", authRole(["Admin"]), controller.updateUser);
router.delete(
  "/admin/deleteuser/:id",
  authRole(["Admin"]),
  controller.deleteUser
);
router.post(
  "/admin/deletemanyuser",
  authRole(["Admin"]),
  controller.deleteManyUser
);
router.post(
  "/admin/adddepartment",
  authRole(["Admin"]),
  controller.addDepartment
);
router.put(
  "/admin/updatedepartment/:id",
  authRole(["Admin"]),
  controller.updateDepartment
);
router.delete(
  "/admin/deletedepartment/:id",
  authRole(["Admin"]),
  controller.deleteDepartment
);
router.post(
  "/admin/deletemanydepartments",
  authRole(["Admin"]),
  controller.deleteManyDepartment
);
router.get(
  "/admin/getallstudent",
  authRole(["Admin"]),
  controller.getAllStudent
);
router.get(
  "/admin/getallstudent/:id",
  authRole(["Admin"]),
  controller.getAllStudentById
);
router.get("/admin/getalluser", authRole(["Admin"]), controller.getAllUser);
router.get(
  "/admin/getalluser/:id",
  authRole(["Admin"]),
  controller.getAllUserById
);
router.get("/admin/getalldepartment", controller.getAllDepartment);
router.get(
  "/admin/getalldepartment/:id",
  authRole(["Admin"]),
  controller.getAllDepartmentById
);
router.get("/admin/getallapplications", controller.getAllApplications);
router.delete(
  "/admin/deleteapplication/:id",
  authRole(["Admin"]),
  controller.deleteApplication
);
router.post(
  "/admin/deletemanyapplications",
  authRole(["Admin"]),
  controller.deleteManyApplications
);
router.get("/admin/viewfeedback", authRole(["Admin"]), controller.viewFeedback);
router.post(
  "/admin/deletemanyfeedbacks",
  authRole(["Admin"]),
  controller.deleteManyFeedbacks
);
router.get(
  "/admin/viewcontactus",
  authRole(["Admin"]),
  controller.viewContactus
);
router.post(
  "/admin/deletemanycontacts",
  authRole(["Admin"]),
  controller.deleteManyContacts
);
router.put("/admin/updatestatus/:id", controller.updateStatus);

//Student Dashboard
router.post( 
  "/student/applyapplication",
  authRole(["Student"]),
  // uploads.single("image"),
  controller.applyApplication
);
router.get("/student/showchalan", authRole(["Student"]), controller.showChalan);
router.post(
  "/student/sendfeedback",
  authRole(["Student"]),
  controller.sendFeedback
);
router.get("/student/status", authRole(["Student"]), controller.Status);
router.put("/student/uploadpaidchalan/:id", controller.uploadPaidChalan);
router.get("/student/Application", controller.Application);

//User Dashboard
router.get("/user/feesection", controller.feeSection);
router.get("/user/showpaidchalan/:id", controller.showPaidChalan);
router.get("/user/library", controller.Library);
router.get("/user/inchargecampus", controller.inchargeCampus);
router.get("/user/examination", controller.examinationDepartment);
router.get("/user/csdepartmentapplication", controller.csdepartmentApplication);
router.get("/user/bsdepartmentapplication", controller.bsdepartmentApplication);
router.get("/user/ecdepartmentapplication", controller.ecdepartmentApplication);
router.get(
  "/user/lawdepartmentapplication",
  controller.lawdepartmentApplication
);
router.get(
  "/user/isldepartmentapplication",
  controller.isldepartmentApplication
);
router.get(
  "/user/urdudepartmentapplication",
  controller.urdudepartmentApplication
);
router.get(
  "/user/comdepartmentapplication",
  controller.comdepartmentApplication
);
router.get("/user/apdepartmentapplication", controller.apdepartmentApplication);
router.get("/user/eedepartmentapplication", controller.eedepartmentApplication);
router.get(
  "/user/mathdepartmentapplication",
  controller.mathdepartmentApplication
);
router.get("/user/sedepartmentapplication", controller.sedepartmentApplication);
router.get("/user/irdepartmentapplication", controller.irdepartmentApplication);
router.get(
  "/user/engdepartmentapplication",
  controller.engdepartmentApplication
);
router.get(
  "/user/phydepartmentapplication",
  controller.phydepartmentApplication
);
router.get(
  "/user/chemdepartmentapplication",
  controller.chemdepartmentApplication
);
router.get(
  "/user/hisdepartmentapplication",
  controller.hisdepartmentApplication
);
router.get("/user/medepartmentapplication", controller.medepartmentApplication);
router.put("/user/uploadfeechalan/:id", controller.uploadChalan);

//Change Password Route
router.put("/changepassword/:id", controller.changePassword);

//Import CSV Files
router.post("/admin/uploadcsv", uploads.single("csv"), controller.uploadCSV);

//Show Student Documents
router.get("/showDocuments/:id", controller.ShowDocuments);

//Fee Section Application Count
router.get(
  "/feesectionapplicationcount",
  controller.feesectionApplicationCount
);

//Library Application Count
router.get("/libraryapplicationcount", controller.libraryApplicationCount);

//Examination Department Application Count
router.get(
  "/examinationdepartmentapplicationcount",
  controller.examinationDepartmentApplicationCount
);

//Incharge Campus Application Count
router.get(
  "/inchargecampusapplicationcount",
  controller.inchargeCampusApplicationCount
);

//Computer Science Department Application Count
router.get(
  "/csdepartmentapplicationcount",
  controller.csdepartmentApplicationCount
);

//Business Department Application Count
router.get(
  "/bsdepartmentapplicationcount",
  controller.bsdepartmentApplicationCount
);

//Economics Department Application Count
router.get(
  "/ecdepartmentapplicationcount",
  controller.ecdepartmentApplicationCount
);

//Law Department Application Count
router.get(
  "/lawdepartmentapplicationcount",
  controller.lawdepartmentApplicationCount
);

//Islamiat Department Application Count
router.get(
  "/isldepartmentapplicationcount",
  controller.isldepartmentApplicationCount
);

//Urdu Department Application Count
router.get(
  "/urdudepartmentapplicationcount",
  controller.urdudepartmentApplicationCount
);

//Commerce Department Application Count
router.get(
  "/comdepartmentapplicationcount",
  controller.comdepartmentApplicationCount
);

//Applied Physics Department Application Count
router.get(
  "/apdepartmentapplicationcount",
  controller.apdepartmentApplicationCount
);

//Electrical Engineering Department Application Count
router.get(
  "/eedepartmentapplicationcount",
  controller.eedepartmentApplicationCount
);

//Mathematics Department Application Count
router.get(
  "/mathdepartmentapplicationcount",
  controller.mathdepartmentApplicationCount
);

//Software Engineering Department Application Count
router.get(
  "/sedepartmentapplicationcount",
  controller.sedepartmentApplicationCount
);

//International Relations Department Application Count
router.get(
  "/irdepartmentapplicationcount",
  controller.irdepartmentApplicationCount
);

//English Department Application Count
router.get(
  "/engdepartmentapplicationcount",
  controller.engdepartmentApplicationCount
);

//Physics Department Application Count
router.get(
  "/phydepartmentapplicationcount",
  controller.phydepartmentApplicationCount
);

//Chemistry Department Application Count
router.get(
  "/chemdepartmentapplicationcount",
  controller.chemdepartmentApplicationCount
);

//History Department Application Count
router.get(
  "/hisdepartmentapplicationcount",
  controller.hisdepartmentApplicationCount
);

//Mechanical Engineering Department Application Count
router.get(
  "/medepartmentapplicationcount",
  controller.medepartmentApplicationCount
);

module.exports = router;
