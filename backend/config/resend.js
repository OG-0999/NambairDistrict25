let resendClient = null;

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    return null;
  }

  if (!resendClient) {
    const { Resend } = require('resend');
    resendClient = new Resend(apiKey);
  }

  return resendClient;
};

module.exports = { getResendClient };
