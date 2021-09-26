// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// USER + POST
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


// USER + COMMENT
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


//POST + COMMENT
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Post, Comment };
