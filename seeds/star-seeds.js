const { Stars} = require('../models');

const starsdata = [
  {
    starTotal:1,
    drink_id: 1,
    user_id: 1
  }
];

const seedStars = () => Stars.bulkCreate(starsdata);

module.exports = seedStars;