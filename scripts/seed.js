const db = require("../models");
const products = require("./products.json");
console.log("CREATING");
db.Product.bulkCreate(products);