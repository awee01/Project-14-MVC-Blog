const { Post } = require('../models');

const postdata = [

  {
    title: 'First Post',
    post_text: 'Example First Post',
    user_id: 1
},
{
    title: 'Second Post',
    post_text: 'Example Second Post',
    user_id: 2
},
{
    title: 'Third Post',
    post_text: 'Example Third Post',
    user_id: 3
},
{
    title: 'Fourth Post',
    post_text: 'Example Fourth Post',
    user_id: 4
},
{
    title: 'Fifth Post',
    post_text: 'Example Fifth Post',
    user_id: 5
}

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
