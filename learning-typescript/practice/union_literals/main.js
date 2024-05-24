// Exercises
// Here are a few exercises to practice union literals:
function updateTaskStatus(id, status) {
    console.log("Task ".concat(id, " is now ").concat(status));
}
updateTaskStatus(1, "In Progress");
updateTaskStatus(2, "Completed");
function processPayment(amount, method) {
    console.log("Processing ".concat(method, " payment of $").concat(amount));
}
;
processPayment(100, "Debit Card");
processPayment(50, "Cash");
function getPermissions(role) {
    switch (role) {
        case "Admin":
            return ["read", "write", "delete"];
        case "User":
            return ["read", "write"];
        case "Guest":
            return ["read"];
    }
}
console.log(getPermissions("Admin"));
console.log(getPermissions("User"));
console.log(getPermissions("Guest"));
