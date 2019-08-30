const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

const products = require("./scripts/products.json");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({force: true})
.then(function() {
    db.Product.bulkCreate(products)
    .then(function(err) {
        console.log('\nError:', err);
    });
})
.then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});