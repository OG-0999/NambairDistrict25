exports.isValidIndianMobile = (number) => /^[6-9]\d{9}$/.test(number);
exports.isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
