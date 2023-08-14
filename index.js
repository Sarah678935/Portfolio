const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

// Serve static files from the "portfolio" directory
app.use(express.static(path.join(__dirname, 'portfolio')));

// Define routes for HTML files
app.get('/html/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Define routes for CSS files
app.get('/css/styles_contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles_contact.css'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
