import random

def roll_dice():
    # Local variables inside the function
    die1 = random.randint(1, 6)
    die2 = random.randint(1, 6)
    return die1, die2

def main():
    # Global variables in the main function
    print("Dice Roll Simulator")
    print("-------------------")
    
    # Roll the dice three times
    for roll in range(1, 4):
        print(f"\nRoll #{roll}:")
        # Call the roll_dice function and get the results
        die1, die2 = roll_dice()
        print(f"Die 1: {die1}")
        print(f"Die 2: {die2}")
        print(f"Total: {die1 + die2}")

if __name__ == "__main__":
    main() 