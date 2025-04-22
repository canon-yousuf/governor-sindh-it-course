# Einstein's mass-energy equivalence calculator
# E = m * c^2

# Speed of light in meters per second
C = 299792458

def calculate_energy(mass):
    """Calculate energy using Einstein's mass-energy equivalence formula."""
    return mass * (C ** 2)

def main():
    print("Einstein's Mass-Energy Equivalence Calculator")
    print("E = m * C^2")
    print()
    
    while True:
        try:
            # Get mass input from user
            mass = float(input("Enter kilos of mass: "))
            
            # Calculate energy
            energy = calculate_energy(mass)
            
            # Display results
            print("\ne = m * C^2...")
            print(f"m = {mass} kg")
            print(f"C = {C} m/s")
            print(f"{energy} joules of energy!")
            print()
            
        except ValueError:
            print("Please enter a valid number for mass.")
        except KeyboardInterrupt:
            print("\nProgram terminated by user.")
            break

if __name__ == "__main__":
    main() 