// config/googleDriveAuth.js

const { google } = require('googleapis');
const credentials = require("./credentials.json");

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

module.exports = auth;
