/*const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

//const Post = require("../../models/Post");
//const User = require("../../models/User");

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post("/", [ auth, [
    check('text', 'Text is required').not().isEmpty()
 ] ], 
 async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return 
  }
};

module.exports = router;*/
