const db = require("./db");

const User = require("./models/User");



const syncAndSeed = async () => {
  await db.sync({ force: true }); //THIS NEEDS TO BE REMOVED IN FINAL VERSION

  const users = [
    {
      name: 'Matthew',
      email: 'matthew@gmail.com',
      password: 'MATTHEW'
    },
    {
      name: 'Tyler',
      email: 'tyler@gmail.com',
      password: 'TYLER'
    },
    {
      name: 'Patrick',
      email: 'patrick@gmail.com',
      password: 'PATRICK'
    }
  ]
  const [matthew, tyler, patrick] = await Promise.all(users.map(user => User.create(user)));

};

//Must be activated for psql to work
//Must deactivate for the app to work

// syncAndSeed();


module.exports = syncAndSeed;
