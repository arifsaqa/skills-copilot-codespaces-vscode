// Create web server
// Create a new web server using express
const express = require('express');
const app = express();

// Use the static files in the public directory
app.use(express.static('public'));

// Use the comments.json file
const comments = require('./comments.json');

// Listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comments by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});