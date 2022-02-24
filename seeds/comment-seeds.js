const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: '',
    user_id: 1,
    drink_id: 1,
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;