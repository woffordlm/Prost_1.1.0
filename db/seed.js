module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    email: 'adam@gates.com',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    db.User.create({
      firstName: 'Uma',
      lastName: 'Pearson',
      email: 'uma@pearson.com',
      password: process.env.USER_PWD,
      isAdmin: false
    }).then(() => {
      db.Drink.create({
        name: "Vodka Soda",
        image_url: "www.image.com",
        category_id:1,
        ingredients: "vodka and soda",
        glass_type: "coupe",
        instructions: "mix and drink"
      });
    })
    .then(()=> {
      db.Comment.create({
        comment_text:"such a good comment",
        user_id:1,
        drink_id:1
      })
    })
    .then(()=> {
      db.Stars.create({
        starTotal:5,
        drink_id:1,
        user_id:1
      })
    })
  });
};
