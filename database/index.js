const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to database!');
  })
  .catch(err => {
    console.error(`error connecting to database: ${err}`);
  });

  const User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    salt: Sequelize.STRING,
    twitter: Sequelize.STRING
  })

  const Work = sequelize.define('work', {
    title: Sequelize.STRING,
    work_id: {
      type: Sequelize.STRING,
      unique: true
    },
    url: Sequelize.STRING,
    description: Sequelize.TEXT
  })
  Work.belongsTo(User)

  const Session = sequelize.define('session', {
    hash: Sequelize.STRING
  })
  Session.belongsTo(User)

  const Blog = sequelize.define('blog', {
    title: Sequelize.STRING,
    text: Sequelize.TEXT,
    date: Sequelize.DATE,
    category: Sequelize.STRING,
    keywords: [Sequelize.STRING]
  })
  Blog.belongsTo(User)
  
  module.exports = {
    User, Work, Session
  }