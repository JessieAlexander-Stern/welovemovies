<<<<<<< HEAD
const { PORT = 5000 } = process.env;
=======
const { PORT = 5432 } = process.env;
>>>>>>> 63a6ba1d42d5208e210325c532767232424467ef

const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
<<<<<<< HEAD
  .catch(console.error);
=======
  .catch(console.error);

  /*const express = require('express')
  const cors = require('cors')
  
  const app = express()
  const router = express.Router()
  const PORT = process.env.PORT || 5000
  
  router.get('/', cors(), (req, res) => {
    res.json({ message: 'Hello Heroku!' });
  })
  
  app.use('/', router);
  
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT} `);
  })
  
  module.exports = app*/
>>>>>>> 63a6ba1d42d5208e210325c532767232424467ef
