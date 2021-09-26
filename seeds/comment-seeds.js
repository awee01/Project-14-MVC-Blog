const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Example One.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Example Two.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Example Three.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Example Four.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Example Five.',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;