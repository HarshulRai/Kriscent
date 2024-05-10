const sendOTP = async (recipient) => {

    const OTP = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP

    console.log(`OTP for ${recipient}: ${OTP}`);

    return OTP;

  }

  

  module.exports = sendOTP;

  
