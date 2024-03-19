// Create web server
// Import express
const express = require('express');
const { request } = require('http');
const { response } = require('express');

// Import model
const Comment = require('../models/comments');

// Create router
const router = express.Router();

// Create route for comments
router.post('/comments', (request, response) => {
    // Create new comment
    const newComment = new Comment({
        name: request.body.name,
        email: request.body.email,
        message: request.body.message
    });

    // Save comment
    newComment.save()
    .then((data) => {
        response.json(data);
    })
    .catch((error) => {
        response.json(error);
    });

});

// Export router
module.exports = router;