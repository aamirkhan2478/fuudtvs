const User = require('../Models/userSchema');
const Department = require('../Models/departmentSchema');
const Application = require('../Models/applicationSchema');
const Feedback = require('../Models/feedbackSchema');
const Contact = require('../Models/contactSchema');

//Admin Deshboard
// @route   POST /admin/adduser
// @desc    Add User route
exports.addUser = async (req, res) => {
  const { userid, name, email, cnic, password, cpassword, role } = req.body;

  if (!userid || !email || !name || !cnic || !password || !cpassword || !role) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }
  if (password.length < 5 || cpassword.length < 5) {
    return res
      .status(400)
      .json({ error: 'Password and Confirm Password must be 6 characters' });
  }
  if (cnic.length < 13) {
    return res.status(400).json({ error: 'CNIC must be 13 characters' });
  }
  if (email.indexOf('@') <= 0) {
    return res.status(400).json({ error: 'Invalid Email' });
  }
  if (
    email.charAt(email.length - 4) != '.' &&
    email.charAt(email.length - 3) != '.'
  ) {
    return res.status(400).json({ error: 'Invalid Email' });
  }

  try {
    const checkid = await User.findOne({ userid });
    if (checkid) {
      return res.status(400).json({ error: 'User Already Registered' });
    } else if (password !== cpassword) {
      return res.status(400).json({ error: 'Password is not match' });
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
      res.status(201).json({ msg: 'User Registered Successfully' });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Server Error');
  }
};

// @route   PUT /admin/updateuser
// @desc    Update User route
exports.updateUser = async (req, res) => {
  const { name, email, cnic, role } = req.body;

  if (!email || !name || !cnic || !role) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }
  if (cnic.length < 13) {
    return res.status(400).json({ error: 'CNIC must be 13 characters' });
  }
  if (email.indexOf('@') <= 0) {
    return res.status(400).json({ error: 'Invalid Email' });
  }
  if (
    email.charAt(email.length - 4) != '.' &&
    email.charAt(email.length - 3) != '.'
  ) {
    return res.status(400).json({ error: 'Invalid Email' });
  }
  const id = req.params.id;

  try {
    const data = await User.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update user with ${id}. May be user not found`,
      });
    } else {
      res.status(200).json({ msg: 'User Updated Successfully' });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /admin/deleteuser
// @desc    Delete User route
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findByIdAndDelete(id);
    if (!data) {
      return res.status(401).json({ error: 'User not found' });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   POST /admin/adddepartment
// @desc     Add Department route
exports.addDepartment = async (req, res) => {
  const { department } = req.body;
  if (!department) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }

  const departments = new Department({
    department,
  });

  try {
    await departments.save();
    return res.status(201).json({ msg: 'Department Add Successfully' });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT /admin/updatedepartment
// @desc     Update Department route
exports.updateDepartment = async (req, res) => {
  const { department } = req.body;
  if (!department) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }
  const id = req.params.id;
  try {
    const data = await Department.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update department with ${id}. May be department not found`,
      });
    } else {
      res.status(200).json({ msg: 'Department Updated Successfully' });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /admin/deletedepartment
// @desc     Delete Department route
exports.deleteDepartment = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Department.findByIdAndDelete(id);
    if (!data) {
      return res.status(401).json({ error: 'Department not found' });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/getallstudent
// @desc    GET Students route
exports.getAllStudent = async (req, res) => {
  try {
    const role = await User.find({ role: 'Student' }).select(
      '-password -cpassword'
    );
    res.send(role);
  } catch (error) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/getallstudent/:id
// @desc    GET Students route
exports.getAllStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const role = await User.findById(id).select('-password -cpassword -userid');
    res.send(role);
  } catch (error) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/getalluser
// @desc    GET User route
exports.getAllUser = async (req, res) => {
  try {
    const role = await User.find({ role: 'User' }).select(
      '-password -cpassword'
    );
    res.send(role);
  } catch (error) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/getalluser/:id
// @desc    GET User route
exports.getAllUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const role = await User.findById(id).select('-password -cpassword -userid');
    res.send(role);
  } catch (error) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/getalldepartment
// @desc    GET Department route
exports.getAllDepartment = async (req, res) => {
  try {
    const department = await Department.find();
    res.send(department);
  } catch (error) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/getalldepartment/:id
// @desc    GET Department route
exports.getAllDepartmentById = async (req, res) => {
  const id = req.params.id;
  try {
    const department = await Department.findById(id);
    res.send(department);
  } catch (error) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/degreeapplication
// @desc    GET Degree Applications route
exports.degreeApplication = async (req, res) => {
  try {
    const application = await Application.find().select('-feeChalan');
    res.send(application);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT /admin/uploadfeechalan/:id
// @desc    PUT Upload Chalan route
exports.uploadChalan = async (req, res) => {
  const { feeChalan } = req.body;

  if (!feeChalan) {
    return res
      .status(400)
      .json({ error: 'Please choose picture of chalan form' });
  }

  const id = req.params.id;
  try {
    const data = await Application.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res
        .status(400)
        .json({ msg: `Cannot update user with ${id}. May be user not found` });
    } else {
      res.status(200).json({ msg: 'Fee Chalan Uploaded Successfully' });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT /admin/updatestatus/:id
// @desc    PUT Update Status route
exports.updateStatus = async (req, res) => {
  const { description, status } = req.body;

  if (!description) {
    return res.status(400).json({ error: 'Please fill all required Fields' });
  }

  if (!status) {
    return res.status(400).json({ error: 'Please select status' });
  }

  const id = req.params.id;
  try {
    const data = await Application.findByIdAndUpdate(id, req.body);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update user with ${id}. May be user not found`,
      });
    } else {
      res.status(200).json({ msg: 'Status Changed Successfully' });
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/viewfeedback
// @desc    GET View Feedback route
exports.viewFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.send(feedback);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /admin/viewcontactus
// @desc    GET View Contact Us route
exports.viewContactus = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.send(contact);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

//Student Deshboard
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
  } = req.body;

  if (
    !fatherName ||
    !enrollmentNo ||
    !department ||
    !program ||
    !section ||
    !shift ||
    !address ||
    !phoneNo
  ) {
    res.status(400).json({ error: 'Please fill all required Fields' });
  }

  try {
    const user = await User.findById(req.user.id).select(
      '-password -cpassword'
    );

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
    });
    await applyapplication.save();
    res.status(201).json({ msg: 'Apply Application Successfully' });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /student/showchalan
// @desc    GET Show Chalan route
exports.showChalan = async (req, res) => {
  try {
    const showchalan = await Application.find({
      misid: req.user.userid,
    }).select('feeChalan');
    res.send(showchalan);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   POST /student/sendfeedback
// @desc    POST Send Feedback route
exports.sendFeedback = async (req, res) => {
  const { feedback } = req.body;
  if (!feedback) {
    res.status(400).json({ error: 'Please fill all required fields' });
  }

  try {
    const user = await User.findById(req.user.id).select(
      '-password -cpassword'
    );
    const feedbacks = new Feedback({
      name: user.name,
      email: user.email,
      feedback,
    });
    await feedbacks.save();
    res.status(200).json({ msg: 'Send Feedback Successfully' });
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /student/status
// @desc    GET Status route
exports.Status = async (req, res) => {
  try {
    const status = await Application.find({
      misid: req.user.userid,
    }).select('description status');
    res.send(status);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

//User Deshboard
// @route   GET /user/approveapplication
// @desc    GET Approved Application route
exports.approveApplication = async (req, res) => {
  try {
    const approveapplication = await Application.find({
      status: { $in: ['Approved', 'Done Fee Section', 'Printing Degree'] },
    }).select('-feeChalan');
    res.send(approveapplication);
  } catch (e) {
    console.error(e.messaage);
    res.status(500).send('Server Error');
  }
};

//Count Applications
// @route   GET /count/appliedapplication
// @desc    GET Applied Applications route
exports.appliedApplication = async (req, res) => {
  try {
    const appliedApplications = await Application.find().countDocuments();
    res.json({ data: appliedApplications });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /count/approvedapplication
// @desc    GET Approved Applications route
exports.approvedApplication = async (req, res) => {
  try {
    const appliedApplications = await Application.find({
      status: 'Approved',
    }).countDocuments();
    res.json({ data: appliedApplications });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT /user/changepassword/:id
// @desc    PUT Change Password route
exports.changePassword = async (req, res) => {
  const { password, cpassword } = req.body;

  if (password !== cpassword) {
    return res.status(400).json({ error: 'Password not match' });
  }
  if (!password || !cpassword) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }
  if (password.length < 5 || cpassword.length < 5) {
    return res
      .status(400)
      .json({ error: 'Password and Confirm Password must be 6 characters' });
  }

  const id = req.params.id;
  try {
    const user = await User.findById(id);
    user.password = password;
    user.cpassword = cpassword;
    await user.save();
    res.status(200).json({ msg: 'Password Change Successfully' });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};
