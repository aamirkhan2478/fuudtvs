const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  misid: {
    type: String,
    required: true,
  },
  stdName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  enrollmentNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default:
      'Your application is sent to admin please check it later for more updates',
  },
  status: {
    type: String,
    required: true,
    default: 'Pending',
  },
  feeChalan: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Application = mongoose.model('application', applicationSchema);
