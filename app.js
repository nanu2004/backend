const express = require('express');
const app = express();
const port = 5001;

// Import the routes from the products module
const products_routes = require('./routes/products');

// Define a root route
app.get('/', (req, res) => {
  res.send('hello');
});

// Use the imported routes with a specified prefix ("/api/products")
app.use('/api/products', products_routes);

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
