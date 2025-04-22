def fahrenheit_to_celsius():
    # Get temperature input from user
    fahrenheit = float(input("Enter temperature in Fahrenheit: "))
    
    # Convert Fahrenheit to Celsius using the formula
    celsius = (fahrenheit - 32) * 5.0/9.0
    
    # Display the result with both temperatures
    print(f"\nTemperature: {fahrenheit}F = {celsius}C")

# Run the program
if __name__ == "__main__":
    fahrenheit_to_celsius() 