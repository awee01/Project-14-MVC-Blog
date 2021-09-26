const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'awee',
  
    password: 'password123'
  },
  {
    username: 'dellv',

    password: 'password123'
  },
  {
    username: 'cactusjack',
  
    password: 'password123'
  },
  {
    username: 'desaf',
  
    password: 'password123'
  },
  {
    username: 'sassyseal',

    password: 'password123'
  },
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
