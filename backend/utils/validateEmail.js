const validateEmail = (email) => {

    // Basic email validation using regex

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);

  }

  

  module.exports = validateEmail;

  
