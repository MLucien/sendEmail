const express = require("express");
const { sendUserEmail, sendMultipleEmails, sendMultipleEmails2 } = require("../controllers/emails");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(sendUserEmail);

router
  .route("/multiple")
  .post(sendMultipleEmails2);

module.exports = router;
