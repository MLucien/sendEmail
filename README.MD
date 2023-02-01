<h1>Email Sender</h1>
This is an open-source project created by Lucien Mendela, which allows you to send both single and multiple emails using NodeMailer.

<h2>Features</h2>
<li>Send single emails by sending a POST request to {{URL}}api/v1/email/ endpoint with email, subject, and message fields in the request body.</li>
<li>Send multiple emails by sending a POST request to {{URL}}api/v1/email/multiple endpoint with recipient (an array), subject, and message fields in the request body.
</li>
<h2>Email Validation</h2>
<li>The application checks for invalid emails before sending the emails, and only sends the emails to valid email addresses.
</li>
<h2>Getting Started</h2>
To start using this project, you need to have Node.js and npm installed on your system.

<li>Clone the repository to your local machine using git clone https://github.com/LucienMendela/email-sender.git</li>
<li>Change the current working directory to the cloned repository using cd email-sender</li>
<li>Install the required dependencies by running npm install</li>
<li>Start the application by running npm start</li>

<h2>Contributions</h2>
If you find any bug or have any suggestions for improvements, you can create a pull request or an issue in the repository.

<h2>License</h2>
This project is licensed under the MIT license.
