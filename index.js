const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Dummy Server!. Testing the CI/CD pipeline. Dev Server, Changes');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});