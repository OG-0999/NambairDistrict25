const Lead = require('../models/Lead');
const { getResendClient } = require('../config/resend');
const { isValidEmail, isValidIndianMobile } = require('../utils/validators');
const mongoose = require('mongoose');

const sendLeadEmail = async (lead) => {
  const resend = getResendClient();
  const receiverEmail = process.env.RECEIVER_EMAIL?.trim();

  if (!resend || !receiverEmail) {
    console.warn('Lead email skipped because RESEND_API_KEY or RECEIVER_EMAIL is missing.');
    return { success: false, message: 'Email notification skipped due to missing configuration.' };
  }

  const { firstName, lastName, mobileNumber, email, preferredUnit, message, createdAt } = lead;
  const html = `
    <h2>New Lead Received</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Phone Number:</strong> ${mobileNumber}</p>
    <p><strong>Email Address:</strong> ${email}</p>
    ${preferredUnit ? `<p><strong>Preferred Unit:</strong> ${preferredUnit}</p>` : ''}
    ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
    <p><strong>Submitted Time:</strong> ${createdAt}</p>
  `;

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: receiverEmail,
      subject: 'New Lead Received',
      html,
    });

    console.log('Resend email delivered:', result);
    return { success: true, message: 'Email sent successfully.' };
  } catch (error) {
    console.error('Resend send error:', error);
    return { success: false, message: error?.message ?? 'Resend failed to send email.' };
  }
};

exports.createLead = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database is not connected.' });
    }

    console.log('Incoming lead payload:', req.body);
    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      preferredUnit = '',
      message = '',
    } = req.body;

    const normalizedFirstName = typeof firstName === 'string' ? firstName.trim() : '';
    const normalizedLastName = typeof lastName === 'string' ? lastName.trim() : '';
    const normalizedMobileNumber = typeof mobileNumber === 'string' ? mobileNumber.replace(/\D/g, '').slice(-10) : '';
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const normalizedPreferredUnit = typeof preferredUnit === 'string' ? preferredUnit.trim() : '';
    const normalizedMessage = typeof message === 'string' ? message.trim() : '';

    if (!normalizedFirstName || !normalizedLastName || !normalizedMobileNumber || !normalizedEmail) {
      return res.status(400).json({ success: false, message: 'All required fields are mandatory.' });
    }

    if (!isValidIndianMobile(normalizedMobileNumber) || !isValidEmail(normalizedEmail)) {
      return res.status(400).json({ success: false, message: 'Enter valid lead details.' });
    }

    const lead = await Lead.create({
      firstName: normalizedFirstName,
      lastName: normalizedLastName,
      mobileNumber: normalizedMobileNumber,
      email: normalizedEmail,
      preferredUnit: normalizedPreferredUnit,
      message: normalizedMessage,
    });

    console.log('Lead saved to MongoDB:', lead._id);

    const emailResult = await sendLeadEmail(lead);

    if (!emailResult.success) {
      return res.status(201).json({
        success: true,
        lead,
        emailSent: false,
        message: 'Lead saved but email notification could not be sent.',
      });
    }

    return res.status(201).json({
      success: true,
      lead,
      emailSent: true,
      message: 'Lead saved and email sent successfully.',
    });
  } catch (error) {
    next(error);
  }
};

exports.getLeads = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, message: 'Database is not connected.' });
    }

    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, leads });
  } catch (error) {
    next(error);
  }
};
