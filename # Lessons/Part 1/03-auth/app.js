/*
  Microservices Authentication and Authorization
  - In a microservices architecture, it's crucial to secure the communication between services. One way to achieve this is by using JSON Web Tokens (JWT). To demonstrate this, let's implement JWT-based authentication for our microservices.


---------------------

  - npm install jsonwebtoken express-jwt


---------------------

  - orders/index.js
  - inventory/index.js


---------------------

  - Now, both microservices require a valid JWT token to access their endpoints (except for the /auth endpoints). To test this, update the /orders/inventory endpoint in the orders/app.js file to include the JWT token when making a request to the inventory microservice


---------------------

  - To test the authentication -> Postman to obtain a JWT token from the /auth endpoint of each microservice and then include it in the request headers when making requests to the other endpoints.


*/
