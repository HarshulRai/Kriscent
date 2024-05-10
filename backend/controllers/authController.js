const express = require('express');

const router = express.Router();

const AuthService = require('../services/authService');



router.post('/signup', async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await AuthService.signup(email, password);

    res.json(user);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});



router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  try {

    const { user, accessToken } = await AuthService.login(email, password);

    res.json({ user, accessToken });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});



router.post('/send-otp', async (req, res) => {

  const { emailOrPhone } = req.body;

  try {

    const OTP = await AuthService.sendOTP(emailOrPhone);

    res.json({ OTP });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});



module.exports = router;
