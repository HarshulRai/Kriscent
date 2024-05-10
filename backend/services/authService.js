const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../models/User');

const sendOTP = require('../utils/sendOTP');

const validateEmail = require('../utils/validateEmail');



const SALT_ROUNDS = 10;

const secretKey = 'your_secret_key';



class AuthService {

  static async signup(email, password) {

    try {

      // Check if email is valid

      if (!validateEmail(email)) {

        throw new Error('Invalid email');

      }



      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await User.createUser(email, hashedPassword);

      return user;

    } catch (error) {

      throw error;

    }

  }



  static async login(email, password) {

    try {

      const user = await User.getUserByEmail(email);

      if (!user) {

        throw new Error('User not found');

      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {

        throw new Error('Invalid password');

      }

      const accessToken = jwt.sign({ email: user.email }, secretKey);

      return { user, accessToken };

    } catch (error) {

      throw error;

    }

  }



  static async sendOTP(emailOrPhone) {

    try {

      // Placeholder implementation for sending OTP via email/phone

      const OTP = await sendOTP(emailOrPhone);

      return OTP;

    } catch (error) {

      throw error;

    }

  }

}



module.exports = AuthService;
