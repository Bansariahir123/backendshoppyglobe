ShoppyGlobe E-commerce API

ShoppyGlobe E-commerce API
This is the backend API for the ShoppyGlobe E-commerce application built using Node.js, Express, and MongoDB. It provides endpoints for product management, shopping cart functionality, user authentication, and more.
Installation
Clone the repository to your local machine:
git clone https://github.com/Bansariahir123/backendshoppyglobe.git
Navigate to the project directory:

cd shoppyglobe-api
npm install
To start the server, use the following command:
npm start
API Endpoints:
Product Routes
GET /products
Fetch a list of all available products.
GET /products/:id
Fetch details of a specific product by its ID.
Cart Routes (Protected with JWT)
POST /cart
Add a product to the shopping cart. Requires a valid JWT token.
PUT /cart/:id
Update the quantity of an item in the cart by cart item ID.
DELETE /cart/:id
Remove an item from the cart by its ID.
User Authentication
POST /register
Register a new user.
POST /login
Login a user and generate a JWT token.

