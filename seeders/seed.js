const db = require("../models");
const products = require("./products.json");
console.log("CREATING");


// module.exports = {
//     up: (queryInterface, Sequelize) => {
 
//         db.Products/bulkCreate(products);
  
//         return queryInterface.bulkInsert('products', products, {});
  
//     },
  
//     down: (queryInterface, Sequelize) => {
//       /*
//         Add reverting commands here.
//         Return a promise to correctly handle asynchronicity.
  
//         Example:
//         return queryInterface.bulkDelete('People', null, {});
//       */
//     }
//   };
  