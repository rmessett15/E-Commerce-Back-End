const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// DO I NEED TO USE SEQUELIZE.SYNC?
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

// Readme.md doc, screen-cast, (clean up)* and add comments to code
// (Figure out error with put route on products)*
// (Delete one of my .gitignore files)*
