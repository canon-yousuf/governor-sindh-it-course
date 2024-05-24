// Question 1: Task Manager
// Define a type TaskStatus that can be either "Not Started", "In Progress", or "Completed". 
type TaskStatus = "Not Started" | "In Progress" | "Completed";

// Create a function updateTaskStatus that takes an id (number) and a status (TaskStatus) 
// and prints a message about the task status update.
function updateTaskStatus(id: number, status: TaskStatus) {
    console.log(`Task ${id} is now ${status}`);
}

// Example usage:
updateTaskStatus(1, "In Progress");
updateTaskStatus(2, "Completed");

// Error handling:
// This will cause a TypeScript error
// updateTaskStatus(3, "On Hold");

// Question 2: Payment Methods
// Define a type PaymentMethod that can be either "Credit Card", "Debit Card", "PayPal", or "Cash".
type PaymentMethod = "Credit Card" | "Debit Card" | "PayPal" | "Cash";

// Write a function processPayment that takes an amount (number) and a method (PaymentMethod) 
// and logs a message indicating the payment method and amount.
function processPayment(amount: number, method: PaymentMethod) {
    console.log(`Processing ${method} payment of $${amount}`);
}

// Example usage:
processPayment(100, "Debit Card");
processPayment(50, "Cash");

// Error handling:
// This will cause a TypeScript error
// processPayment(20, "Check");

// Question 3: User Roles
// Define a type UserRole that can be either "Admin", "User", or "Guest".
type UserRole = "Admin" | "User" | "Guest";

// Create a function getPermissions that takes a role (UserRole) and returns a list of permissions (string array) based on the role.
function getPermissions(role: UserRole): string[] {
    switch (role) {
        case "Admin":
            return ["read", "write", "delete"];
        case "User":
            return ["read", "write"];
        case "Guest":
            return ["read"];
        default:
            throw new Error("Invalid user role");
    }
}

// Example usage:
console.log(getPermissions("Admin"));
console.log(getPermissions("User"));
console.log(getPermissions("Guest"));

// Error handling:
// This will cause a TypeScript error
// console.log(getPermissions("SuperUser"));
