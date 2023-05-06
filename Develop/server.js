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

// Ask about put route within both category and tag route files
// Ask about onDelete CASCADE on index and general format of my index within models
// Need to figure out Post/Put route for Product
// Have tutor check I have done everything correctly
