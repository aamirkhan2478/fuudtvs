const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
      "Your application is sent to Admin please check it later for more updates",
  },
  status: {
    type: String,
    required: true,
    default: "Admin",
  },
  feeChalan: {
    type: String,
    default: "",
  },
  date: {
    type: String,
  },
  updatedDate: {
    type: String,
  },
  session: {
    type: String,
    required: true,
  },
  documents: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  paidChalan: {
    type: String,
    default: "",
  },
});

module.exports = Application = mongoose.model("application", applicationSchema);
