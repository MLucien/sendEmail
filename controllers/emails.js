const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const sendEmail = require("../utils/sendEmail");
const validator = require("validator");

// Send email to user pass params to sendEmail function

// Export the function to send custom emails

//@desc Send email to user
//@route POST /api/v1/email/multiple
//@access Public
exports.sendUserEmail = asyncHandler(async (req, res, next) => {
    const { email, subject, message } = req.body;
    
    //valid email before sending email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, ErrorResponse: "Invalid email address" });
    }
    
    // try and catch block to send email
    try {
      await sendEmail({ email, subject, message });
      return res.status(200).json({ success: true, data: "Email sent" });
    } catch (ErrorResponse) {
      return res.status(500).json({ success: false, ErrorResponse: "Email could not be sent" });
    }
  });

  // send email to multiple users even if one email fails, when it fails it adds it into an array of failed email

  //@desc Send email to multiple users
//@route POST /api/v1/email
//@access Public
 exports.sendMultipleEmails2 = asyncHandler(async (req, res, next) => {
    const { recipients, subject, message } = req.body;
    let failedRecipients = [];
  
    for (const email of recipients) {
      if (!validator.isEmail(email)) {
        failedRecipients.push(email);
        continue;
      }
  
      try {
        await sendEmail({ email, subject, message });
      } catch (ErrorResponse) {
        failedRecipients.push(email);
      }
    }
  
    if (failedRecipients.length > 0) {
      return res.status(200).json({
        success: true,
        data: "Some emails failed to send",
        failedRecipients,
      });
    }
  
    return res.status(200).json({ success: true, data: "Emails sent" });});