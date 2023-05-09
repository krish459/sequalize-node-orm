const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false }) // wont create tables again everytime you run it
  .then(() => {
    console.log("Yes re-sync done!");
  });

// 1 to many relationship
db.products.hasMany(db.reviews, {
  foreignKey: "product_id",
  as: "review",
});
db.reviews.belongsTo(db.products, {
  foreignKey: "product_id",
  as: "product",
});

module.exports = db;
