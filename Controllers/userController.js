const User = require('../Models/userSchema');
const Contact = require('../Models/contactSchema');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const Application = require('../Models/applicationSchema');

exports.login = async (req, res) => {
  const { userid, password } = req.body;
  if (!userid || !password) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }
  try {
    const checkid = await User.findOne({ userid });
    if (!checkid) {
      return res
        .status(400)
        .json({ error: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, checkid.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid Credentials' });
    }
    const token = checkid.generateToken();
    res.status(200).json({ sucess: true, token });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Server Error');
  }
};

exports.forgetpassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ error: 'Email not found' });
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/changepassword/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        text: message,
      });

      res.status(200).json({ success: true, data: 'Email Sent' });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res.status(500).send('Email could not be sent');
    }
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

exports.resetpassword = async (req, res) => {
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

  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid Token' });
    }

    user.password = password;
    user.cpassword = cpassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: 'Password Updated Success',
      token: user.generateToken(),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.contact = async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({
    name,
    email,
    message,
  });
  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all required fields' });
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
    await contact.save();
    res.status(201).json({ msg: 'Send your message to admin successfully' });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Server Error');
  }
};

exports.getalldata =(req, res) => {
  res.send(req.user);
};

exports.degreeValidation = async (req, res) => {
  try {
    const application = await Application.find({ status: 'Success' }).select(
      '-fatherName -section -shift -address -feeChalan -date'
    );
    res.send(application);
  } catch (e) {
    console.error(e.message);
    return res.status(500).send('Server Error');
  }
};
