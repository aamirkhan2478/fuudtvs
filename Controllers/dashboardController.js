const User = require("../Models/userSchema");
const Department = require("../Models/departmentSchema");
const Feedback = require("../Models/feedbackSchema");
const Contact = require("../Models/contactSchema");
const Application = require("../Models/applicationSchema");
const moment = require("moment");
const csv = require("csvtojson");
const base64Mime = require("base64mime");

//Admin Dashboard
// @route   POST /admin/adduser
// @desc    Add User route
exports.addUser = async (req, res) => {
  const { userid, name, email, cnic, password, cpassword, role } = req.body;

  const usernameValidator =
    /^(?=.{3,20}$)(?![_.0-9])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  const passwordValidator =
    /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/;
  const nameValidator = /^[A-Za-z ]{3,20}$/;
  const emailValidator =
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const cnicValidator = /^(^[0-9+]{13}$)$/;

  if (!userid || !email || !name || !cnic || !password || !cpassword || !role) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }
  if (!usernameValidator.test(userid)) {
    return res.status(400).json({
      error:
        "Username should be 3-16 characters and shouldn't include any special character!",
    });
  }
  if (!passwordValidator.test(password)) {
    return res.status(400).json({
      error:
        "Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!",
    });
  }
  if (!cnicValidator.test(cnic)) {
    return res.status(400).json({ error: "CNIC must be 13 characters" });
  }
  if (!emailValidator.test(email)) {
    return res.status(400).json({ error: "Invalid Email" });
  }
  if (!nameValidator.test(name)) {
    return res.status(400).json({
      error:
        "Name should have at least 3 characters and should not any number!",
    });
  }

  try {
    const checkid = await User.findOne({ userid });
    if (checkid) {
      return res.status(400).json({ error: "User Already Registered" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "Password is not match" });
    } else {
      const user = new User({
        userid,
        name,
        email,
        cnic,
        password,
        cpassword,
        role,
      });
      await user.save();
      return res.status(201).json({ msg: "User Registered Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   POST /admin/addstudent
// @desc    Add Student route
exports.addStudent = async (req, res) => {
  const { userid, name, email, cnic, password, cpassword, role } = req.body;

  const misidValidation = /^[0-9]+$/;
  const passwordValidator =
    /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/;
  const nameValidator = /^[A-Za-z ]{3,20}$/;
  const emailValidator =
    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const cnicValidator = /^[0-9+]{13}$/;

  if (!userid || !email || !name || !cnic || !password || !cpassword || !role) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }
  if (!misidValidation.test(userid)) {
    return res.status(400).json({ error: "Please enter only numbers!" });
  }
  if (!passwordValidator.test(password)) {
    return res.status(400).json({
      error:
        "Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!",
    });
  }
  if (!cnicValidator.test(cnic)) {
    return res.status(400).json({ error: "CNIC must be 13 characters" });
  }
  if (!emailValidator.test(email)) {
    return res.status(400).json({ error: "Invalid Email" });
  }
  if (!nameValidator.test(name)) {
    return res.status(400).json({
      error:
        "Name should have at least 3 characters and should not any number!",
    });
  }

  try {
    const checkid = await User.findOne({ userid });
    if (checkid) {
      return res.status(400).json({ error: "User Already Registered" });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: "Password is not match" });
    } else {
      const user = new User({
        userid,
        name,
        email,
        cnic,
        password,
        cpassword,
        role,
      });
      await user.save();
      return res.status(201).json({ msg: "User Registered Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   PUT /admin/updateuser
// @desc    Update User route
exports.updateUser = async (req, res) => {
  const { name, email, cnic, role } = req.body;

  if (!email || !name || !cnic || !role) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  if (cnic.length < 13) {
    return res.status(400).json({ error: "CNIC must be 13 characters" });
  }
  if (email.indexOf("@") <= 0) {
    return res.status(400).json({ error: "Invalid Email" });
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    return res.status(400).json({ error: "Invalid Email" });
  }
  const id = req.params.id;

  try {
    const data = await User.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update user with ${id}. May be user not found`,
      });
    } else {
      return res.status(200).json({ msg: "User Updated Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deleteuser
// @desc    Delete User route
exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findByIdAndDelete(id);
    if (!data) {
      return res.status(401).json({ error: "User not found" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deletemanyuser
// @desc    Delete User route
exports.deleteManyUser = async (req, res) => {
  const ids = req.body.map((data) => data);

  try {
    await User.deleteMany({ _id: ids });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   POST /admin/adddepartment
// @desc     Add Department route
exports.addDepartment = async (req, res) => {
  const { department } = req.body;
  if (!department) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  const departments = new Department({
    department,
  });

  try {
    await departments.save();
    return res.status(201).json({ msg: "Department Add Successfully" });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   PUT /admin/updatedepartment
// @desc     Update Department route
exports.updateDepartment = async (req, res) => {
  const { department } = req.body;
  if (!department) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  const id = req.params.id;
  try {
    const data = await Department.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update department with ${id}. May be department not found`,
      });
    } else {
      return res.status(200).json({ msg: "Department Updated Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deletedepartment
// @desc    Delete Department route
exports.deleteDepartment = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Department.findByIdAndDelete(id);
    if (!data) {
      return res.status(401).json({ error: "Department not found" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deletemanydepartment
// @desc    Delete Department route
exports.deleteManyDepartment = async (req, res) => {
  const ids = req.body.map((data) => data);

  try {
    await Department.deleteMany({ _id: ids });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getallstudent
// @desc    GET Students route
exports.getAllStudent = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.userid.toString().includes(q));
  };
  try {
    const role = await User.find({ role: "Student" })
      .select("-password -cpassword")
      .sort("-_id");
    return res.json(search(role));
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getallstudent/:id
// @desc    GET Student by id route
exports.getAllStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const role = await User.findById(id).select("-password -cpassword -userid");
    return res.send(role);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getalluser
// @desc    GET User route
exports.getAllUser = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.userid.toLowerCase().includes(q));
  };
  try {
    const role = await User.find({
      role: { $nin: ["Student", "Admin"] },
    })
      .select("-password -cpassword")
      .sort("-_id");
    res.send(search(role));
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getalluser/:id
// @desc    GET User by id route
exports.getAllUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const role = await User.findById(id).select("-password -cpassword -userid");
    return res.send(role);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getalldepartment
// @desc    GET Department route
exports.getAllDepartment = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.department.toLowerCase().includes(q));
  };
  try {
    const department = await Department.find().sort("-_id");
    return res.send(search(department));
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getalldepartment/:id
// @desc    GET Department by id route
exports.getAllDepartmentById = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findById(id);
    return res.send(department);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/getallapplications
// @desc    GET Department route
exports.getAllApplications = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const application = await Application.find();
    return res.send(search(application));
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deleteapplication
// @desc    Delete Application route
exports.deleteApplication = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Application.findByIdAndDelete(id);
    if (!data) {
      return res.status(401).json({ error: "Application not found" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deletemanyapplications
// @desc    Delete Applications route
exports.deleteManyApplications = async (req, res) => {
  const ids = req.body.map((data) => data);

  try {
    await Application.deleteMany({ _id: ids });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/viewfeedback
// @desc    View Feedback route
exports.viewFeedback = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(q));
  };
  try {
    const feedback = await Feedback.find().sort("-_id");
    return res.send(search(feedback));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deletemanyfeedbacks
// @desc    Delete feedbacks route
exports.deleteManyFeedbacks = async (req, res) => {
  const ids = req.body.map((data) => data);

  try {
    await Feedback.deleteMany({ _id: ids });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /admin/viewcontactus
// @desc    View Contact Us route
exports.viewContactus = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(q));
  };
  try {
    const contact = await Contact.find().sort("-_id");
    return res.send(search(contact));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   DELETE /admin/deletemanycontacts
// @desc    Delete Contacts route
exports.deleteManyContacts = async (req, res) => {
  const ids = req.body.map((data) => data);

  try {
    await Contact.deleteMany({ _id: ids });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   POST /admin/uploadcsv
// @desc    Import CSV route
exports.uploadCSV = async (req, res) => {
  //convert csvfile to jsonArray
  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      //insertmany is used to save bulk data in database.
      //saving the data in collection(table)
      User.insertMany(jsonObj, (err, data) => {
        if (err) {
          return res.status(400).json({
            error:
              "Check your csv file may be you are missing some field in it or the extension of file is incorrect!",
          });
        } else {
          return res.status(200).json({
            msg: "File Uploaded Successfully!",
            result: data,
          });
        }
      });
    });
};

// @route   PUT /admin/updatestatus/:id
// @desc    PUT Update Status route
exports.updateStatus = async (req, res) => {
  const { description, status } = req.body;

  if (!description) {
    return res.status(400).json({ error: "Please fill all required Fields" });
  }

  if (!status) {
    return res.status(400).json({ error: "Please select status" });
  }

  const id = req.params.id;
  try {
    const data = await Application.findById(id);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update user with ${id}. May be user not found`,
      });
    } else {
      data.description = description;
      data.status = status;
      data.updatedDate = moment().format("L");
      await data.save();
      return res.status(200).json({ msg: "Status Changed Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Student Dashboard
// @route   POST /student/applyapplication
// @desc    POST Apply Application route
exports.applyApplication = async (req, res) => {
  const {
    fatherName,
    enrollmentNo,
    department,
    program,
    section,
    shift,
    address,
    phoneNo,
    session,
    documents,
    image,
  } = req.body;

  const fathernameValidation = /^[A-Za-z ]{3,20}$/;
  const sectionValidation = /^[A-Z]{1}$/;
  const sessionVaildation =
    /^(Fall )[0-9]{4,30}|(Spring )[0-9]{4,30}|(Autumn )[0-9]{4,30}$/;
  const phoneValidation = /^[0-9]{11}$/;
  if (
    !fatherName ||
    !enrollmentNo ||
    !department ||
    !program ||
    !section ||
    !shift ||
    !address ||
    !phoneNo ||
    !session ||
    !documents ||
    !image
  ) {
    return res.status(400).json({ error: "Please fill all required Fields" });
  }
  if (!fathernameValidation.test(fatherName)) {
    return res.status(400).json({
      error:
        "Name should have at least 3 characters and shouldn't any number and First letter must be capital!",
    });
  }
  if (!sessionVaildation.test(session)) {
    return res.status(400).json({
      error:
        "You should enter only Fall Year or Spring Year or Autumn Year eg: Fall 2012!",
    });
  }
  if (!sectionValidation.test(section)) {
    return res
      .status(400)
      .json({ error: "Section should be only one capital letter!" });
  }
  if (!phoneValidation.test(phoneNo)) {
    return res.status(400).json({ error: "Invalid phone number!" });
  }

  try {
    const user = await User.findById(req.user.id).select(
      "-password -cpassword"
    );
    const checkApplication = await Application.findOne({ misid: user.userid });
    if (checkApplication) {
      return res.status(400).json({ error: "You Already Sent Application!" });
    } else {
      const applyapplication = new Application({
        misid: user.userid,
        stdName: user.name,
        fatherName,
        enrollmentNo,
        email: user.email,
        department,
        program,
        section,
        shift,
        address,
        phoneNo,
        session,
        date: moment().format("L"),
        updatedDate: moment().format("L"),
        documents,
        image,
      });
      await applyapplication.save();
      return res.status(201).json({ msg: "Apply Application Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /student/showchalan
// @desc    GET Show Chalan route
exports.showChalan = async (req, res) => {
  try {
    const showchalan = await Application.findOne({
      misid: req.user.userid,
    }).select("feeChalan");
    return res.send(showchalan);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /student/application
// @desc    GET Show Aplication route
exports.Application = async (req, res) => {
  try {
    const application = await Application.findOne({
      misid: req.user.userid,
    }).select("_id");
    return res.send(application);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   POST /student/sendfeedback
// @desc    POST Send Feedback route
exports.sendFeedback = async (req, res) => {
  const { feedback } = req.body;
  if (!feedback) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  try {
    const user = await User.findById(req.user.id).select(
      "-password -cpassword"
    );
    const feedbacks = new Feedback({
      name: user.name,
      email: user.email,
      feedback,
    });
    await feedbacks.save();
    return res.status(200).json({ msg: "Send Feedback Successfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /student/status
// @desc    GET Status route
exports.Status = async (req, res) => {
  try {
    const status = await Application.findOne({
      misid: req.user.userid,
    }).select("description status updatedDate");
    return res.send(status);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   Put /student/uploadpaidchalan
// @desc    Upload Paid Chalan route
exports.uploadPaidChalan = async (req, res) => {
  const { paidChalan } = req.body;

  if (!paidChalan) {
    return res
      .status(400)
      .json({ error: "Please choose picture of paid chalan form" });
  }

  if (
    base64Mime(paidChalan) === "image/jpeg" ||
    base64Mime(paidChalan) === "image/png"
  ) {
    console.log("valid format");
  } else {
    return res.status(400).json({ error: "Please select image format!" });
  }

  const id = req.params.id;
  try {
    const data = await Application.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(405).json({
        error: `Cannot update user with ${id}. May be user not found`,
      });
    } else {
      return res.status(200).json({ msg: "Fee Chalan Uploaded Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// User Dashboard
// @route   GET /user/feesection
// @desc    GET Status route
exports.feeSection = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const status = await Application.find({
      status: { $in: ["Approved", "Due Fee"] },
    })
      .select("-status -phoneNo -description")
      .sort("-_id");
    res.send(search(status));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   PUT /user/uploadfeechalan/:id
// @desc    PUT Upload Chalan route
exports.uploadChalan = async (req, res) => {
  const { feeChalan } = req.body;

  if (!feeChalan) {
    return res
      .status(400)
      .json({ error: "Please choose picture of chalan form" });
  }

  if (
    base64Mime(feeChalan) === "image/jpeg" ||
    base64Mime(feeChalan) === "image/png"
  ) {
    console.log("valid format");
  } else {
    return res.status(400).json({ error: "Please select image format!" });
  }

  const id = req.params.id;
  try {
    const data = await Application.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res
        .status(400)
        .json({ msg: `Cannot update user with ${id}. May be user not found` });
    } else {
      return res.status(200).json({ msg: "Fee Chalan Uploaded Successfully" });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/showpaidchalan/:id
// @desc    GET Show Paid Chalan route
exports.showPaidChalan = async (req, res) => {
  const id = req.params.id;
  try {
    const showpaidchalan = await Application.findById(id).select("paidChalan");
    return res.send(showpaidchalan);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/library
// @desc    GET Library route
exports.Library = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const status = await Application.find({
      status: { $in: ["Library", "Book Not Returned"] },
    })
      .select("-status -phoneNo -description -address")
      .sort("-_id");
    res.send(search(status));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/inchargecampus
// @desc    GET Incharge Campus route
exports.inchargeCampus = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const status = await Application.find({
      status: { $in: ["Incharge Campus", "Issues"] },
    })
      .select("-status -phoneNo -description")
      .sort("-_id");
    res.send(search(status));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/examination
// @desc    GET Examination Department route
exports.examinationDepartment = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const status = await Application.find({
      status: {
        $in: [
          "Examination Department",
          "Degree Printing",
          "Degree Printed",
          "Issue",
        ],
      },
    })
      .select("-phoneNo -description")
      .sort("-_id");
    res.send(search(status));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/csdepartmentapplication
// @desc    Show Computer Science Department Application  route
exports.csdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Computer Science Department", "Any Issue"] },
    })
      .select("-status -phoneNo -description")
      .sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/urdudepartmentapplication
// @desc    Show Urdu Department Application  route
exports.urdudepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Urdu Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/isldepartmentapplication
// @desc    Show Islamiat Department Application  route
exports.isldepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Islamiat Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/lawdepartmentapplication
// @desc    Show Law Department Application  route
exports.lawdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Law Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/ecdepartmentapplication
// @desc    Show Economics Department Application  route
exports.ecdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Economics Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/bsdepartmentapplication
// @desc    Show Business Department Application  route
exports.bsdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Business Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/comdepartmentapplication
// @desc    Show Commerce Department Application  route
exports.comdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Commerce Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/apdepartmentapplication
// @desc    Show Applied Physics Department Application  route
exports.apdepartmentApplication = async (req, res) => {
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Applied Physics Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/eedepartmentapplication
// @desc    Show Electrical Engineering Department Application  route
exports.eedepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: {
        $in: ["Head Of Electrical Engineering Department", "Any Issue"],
      },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/mathdepartmentapplication
// @desc    Show Mathematics Department Application  route
exports.mathdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Mathematics Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/irdepartmentapplication
// @desc    Show International Relations Department Application  route
exports.irdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: {
        $in: ["Head Of International Relations Department", "Any Issue"],
      },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/engdepartmentapplication
// @desc    Show English Department Application  route
exports.engdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of English Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/phydepartmentapplication
// @desc    Show Physics Department Application  route
exports.phydepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Physics Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/chemdepartmentapplication
// @desc    Show Chemistry Department Application  route
exports.chemdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Chemistry Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/hisdepartmentapplication
// @desc    Show History Department Application  route
exports.hisdepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of History Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/medepartmentapplication
// @desc    Show Mechanical Engineering Department Application  route
exports.medepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: {
        $in: ["Head Of Mechanical Engineering Department", "Any Issue"],
      },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

// @route   GET /user/sedepartmentapplication
// @desc    Show Software Engineering Department Application  route
exports.sedepartmentApplication = async (req, res) => {
  const { q } = req.query;
  const search = (data) => {
    return data.filter((item) => item.misid.toString().includes(q));
  };
  try {
    const document = await Application.find({
      status: { $in: ["Head Of Software Engineering Department", "Any Issue"] },
    }).sort("-_id");
    res.send(search(document));
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Change Password for every user
// @route   PUT /changepassword/:id
// @desc    Change Password route
exports.changePassword = async (req, res) => {
  const { password, cpassword } = req.body;

  const passwordValidator =
    /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/;

  if (password !== cpassword) {
    return res.status(400).json({ error: "Password not match" });
  }
  if (!password || !cpassword) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }
  if (!passwordValidator.test(password)) {
    return res.status(400).json({
      error:
        "Password must contain at least 8 characters, 1 number, 1 upper , 1 lowercase and 1 special characters!",
    });
  }

  const id = req.params.id;
  try {
    const user = await User.findById(id);
    user.password = password;
    user.cpassword = cpassword;
    await user.save();
    return res.status(200).json({ msg: "Password Change Successfully" });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Show Student Documents
// @route   GET /showdocuments/:id
// @desc    Show Student Documents route
exports.ShowDocuments = async (req, res) => {
  const id = req.params.id;
  try {
    const documents = await Application.findById(id).select("documents");
    res.send(documents);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Feesection Application Count
// @route   GET /feesectionapplicationcount
// @desc    Show Fee Section Appliaction Count route
exports.feesectionApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Approved",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Library Application Count
// @route   GET /libraryapplicationcount
// @desc    Show Library Application Count route
exports.libraryApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Library",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Examination Department Application Count
// @route   GET /examinationdepartmentapplicationcount
// @desc    Show Examination Department Application Count route
exports.examinationDepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: {
        $in: ["Examination Department", "Degree Printing", "Degree Printed"],
      },
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Incharge Campus Application Count
// @route   GET /inchargecampusapplicationcount
// @desc    Show Incharge Campus Application Count route
exports.inchargeCampusApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Incharge Campus",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Computer Science Department Application Count
// @route   GET /csdepartmentapplicationcount
// @desc    Show Computer Science Department Application Count route
exports.csdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Computer Science Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Urdu Department Application Count
// @route   GET /urdudepartmentapplicationcount
// @desc    Show Urdu Department Application Count route
exports.urdudepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Urdu Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Islamiat Department Application Count
// @route   GET /isldepartmentapplicationcount
// @desc    Show Islamiat Department Application Count route
exports.isldepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Islamiat Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Law Department Application Count
// @route   GET /lawdepartmentapplicationcount
// @desc    Show Law Department Application Count route
exports.lawdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Law Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Economics Department Application Count
// @route   GET /ecdepartmentapplicationcount
// @desc    Show Economics Department Application Count route
exports.ecdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Economics Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Business Department Application Count
// @route   GET /bsdepartmentapplicationcount
// @desc    Show Business Department Application Count route
exports.bsdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Business Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Commerce Department Application Count
// @route   GET /comdepartmentapplicationcount
// @desc    Show Commerce Department Application Count route
exports.comdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Commerce Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Applied Physics Department Application Count
// @route   GET /apdepartmentapplicationcount
// @desc    Show Applied Physics Department Application Count route
exports.apdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Applied Physics Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Electrical Engineering Department Application Count
// @route   GET /eedepartmentapplicationcount
// @desc    Show Electrical Engineering Department Application Count route
exports.eedepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Electrical Engineering Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Mathematics Department Application Count
// @route   GET /mathdepartmentapplicationcount
// @desc    Show Mathematics Department Application Count route
exports.mathdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Mathematics Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//International Relations Department Application Count
// @route   GET /irdepartmentapplicationcount
// @desc    Show International Relations Department Application Count route
exports.irdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of International Relations Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//English Department Application Count
// @route   GET /engdepartmentapplicationcount
// @desc    Show English Department Application Count route
exports.engdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of English Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Physics Department Application Count
// @route   GET /phydepartmentapplicationcount
// @desc    Show Physics Department Application Count route
exports.phydepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Physics Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Chemistry Department Application Count
// @route   GET /chemdepartmentapplicationcount
// @desc    Show Chemistry Department Application Count route
exports.chemdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Chemistry Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//History Department Application Count
// @route   GET /hisdepartmentapplicationcount
// @desc    Show History Department Application Count route
exports.hisdepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of History Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Mechanical Engineering Department Application Count
// @route   GET /medepartmentapplicationcount
// @desc    Show Mechanical Engineering Department Application Count route
exports.medepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Mechanical Engineering Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};

//Software Engineering Department Application Count
// @route   GET /sedepartmentapplicationcount
// @desc    Show Software Engineering Department Application Count route
exports.sedepartmentApplicationCount = async (req, res) => {
  try {
    const document = await Application.find({
      status: "Head Of Software Engineering Department",
    }).countDocuments();
    res.send(document.toString());
  } catch (e) {
    console.error(e.message);
    return res.status(500).send("Server Error");
  }
};
