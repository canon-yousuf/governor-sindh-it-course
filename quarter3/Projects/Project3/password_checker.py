import streamlit as st
import re
from typing import Tuple

def check_password_strength(password: str) -> Tuple[int, list]:
    """
    Check password strength and return score and feedback
    """
    score = 0
    feedback = []
    
    # Length check
    if len(password) < 8:
        feedback.append("❌ Password should be at least 8 characters long")
    else:
        score += 1
        feedback.append("✅ Password length is good")
    
    # Check for numbers
    if re.search(r"\d", password):
        score += 1
        feedback.append("✅ Contains numbers")
    else:
        feedback.append("❌ Should contain numbers")
    
    # Check for lowercase
    if re.search(r"[a-z]", password):
        score += 1
        feedback.append("✅ Contains lowercase letters")
    else:
        feedback.append("❌ Should contain lowercase letters")
    
    # Check for uppercase
    if re.search(r"[A-Z]", password):
        score += 1
        feedback.append("✅ Contains uppercase letters")
    else:
        feedback.append("❌ Should contain uppercase letters")
    
    # Check for special characters
    if re.search(r"[ !#$%&'()*+,-./[\\\]^_`{|}~"+r'"]', password):
        score += 1
        feedback.append("✅ Contains special characters")
    else:
        feedback.append("❌ Should contain special characters")
    
    return score, feedback

def main():
    st.title("Password Strength Checker")
    st.write("Check how strong your password is!")
    
    # Password input
    password = st.text_input("Enter your password", type="password")
    
    if password:
        score, feedback = check_password_strength(password)
        
        # Calculate percentage
        strength_percentage = (score / 5) * 100
        
        # Display strength bar
        st.progress(strength_percentage / 100)
        
        # Display strength text
        if score < 2:
            st.error("Weak Password")
        elif score < 4:
            st.warning("Moderate Password")
        else:
            st.success("Strong Password")
        
        # Display feedback
        st.write("### Password Criteria:")
        for item in feedback:
            st.write(item)
        
        # Additional security tips
        with st.expander("Security Tips 💡"):
            st.write("""
            - Use a mix of characters, numbers, and symbols
            - Make your password at least 12 characters long
            - Avoid using personal information
            - Use different passwords for different accounts
            - Consider using a password manager
            """)

if __name__ == "__main__":
    main()