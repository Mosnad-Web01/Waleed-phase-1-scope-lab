// 1. Declare a global variable called customerName
var customerName = "bob";

// 2. Write a function that uppercases customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Accessing global customerName and changing it
}

// 3. Declare bestCustomer in the global scope
var bestCustomer; // Declare without initializing

// Set the function to assign to bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // Assign to the global variable
}

// 4. Write a function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Changing the global bestCustomer variable
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = "john";

// 6. Attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "doe"; // This will throw an error because leastFavoriteCustomer is a constant
}
