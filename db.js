const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dikshantsaini072002:uFosAknQIVPLSHgU@cluster0.7pwcnum.mongodb.net/MarketPlace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schemas and models here

module.exports = {
  Product: mongoose.model('Product', productSchema),
  Category: mongoose.model('Category', categorySchema),
};
