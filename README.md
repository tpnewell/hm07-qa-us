# Sprint 7 project
## Project Summary
This project includes testing api endpoints for the Urban Grocers app, and their status codes and response bodies.
## Technologies & Techniques Utilized
Git and Github \
Postman\
Node JS\
Jest\
Javascript\
apiDocs and Swagger\
Testing automation
## Testing summary 
2 tests were performed for each request (GET, POST, DELETE and PUT)
- For GET, I tested that a kit would be returned with the response code 200, and that the body would contain the name of the kit.
- For POST, I tested that adding a product list to the orders would return a status code of 201, and that the body courierService in the body was "Order and go".
- For DELETE, I tested being able to delete a kit with the status code 200, and that the body response would return as "true".
- For PUT, I tested changing the price on a product with a return status code of 200, and that the body response would be "true".
### Directions
- Clone or download repo
- In command line, open directory
- Install npm if not already initialized with `npm init`
- Install jest if not already initialized with `npm jest`
- Run tests with `npx jest directory/filename.test`, replacing `directory/filename.test` with your directory path



