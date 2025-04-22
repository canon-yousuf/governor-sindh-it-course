import streamlit as st
import hashlib
from cryptography.fernet import Fernet

# 1. —──────── Session state setup ────────────
# Streamlit reruns your script on every interaction,
# so we store our data and counters permanently in session_state.
if 'KEY' not in st.session_state:
    st.session_state.KEY = Fernet.generate_key()
    st.session_state.cipher = Fernet(st.session_state.KEY)
if 'stored_data' not in st.session_state:
    # maps encrypted_token → hashed_passkey
    st.session_state.stored_data = {}
if 'failed_attempts' not in st.session_state:
    st.session_state.failed_attempts = 0

# 2. —──────── Helper functions ────────────
def hash_passkey(passkey: str) -> str:
    """Return the SHA-256 hash of the passkey."""
    return hashlib.sha256(passkey.encode()).hexdigest()

def encrypt_data(text: str) -> str:
    """Encrypt plain text to a Fernet token."""
    return st.session_state.cipher.encrypt(text.encode()).decode()

def decrypt_data(token: str) -> str | None:
    """
    Attempt to decrypt.
    Returns plaintext on success, or None if token is invalid.
    """
    try:
        return st.session_state.cipher.decrypt(token.encode()).decode()
    except:
        return None

# 3. —──────── Streamlit UI ────────────
st.title("🔒 Secure Data Encryption System")
menu = ["Home", "Store Data", "Retrieve Data", "Login"]
choice = st.sidebar.selectbox("Navigation", menu)

# ─────── Home Page ───────
if choice == "Home":
    st.subheader("🏠 Welcome!")
    st.write(
        """
        - **Store Data**: encrypt your text with a passkey.  
        - **Retrieve Data**: decrypt by entering the same passkey (3 wrong tries → Login).  
        - **Login**: reauthorize after too many failed attempts.
        """
    )

# ─────── Store Data ───────
elif choice == "Store Data":
    st.subheader("📂 Store Data Securely")
    user_text = st.text_area("1. Enter the text you want to secure:")
    passkey = st.text_input("2. Create a passkey:", type="password")

    if st.button("Encrypt & Save"):
        if not user_text or not passkey:
            st.error("⚠️ Both text and passkey are required!")
        else:
            hashed = hash_passkey(passkey)
            token = encrypt_data(user_text)
            # Save both encrypted token and the hash of the passkey
            st.session_state.stored_data[token] = hashed
            st.success("✅ Data stored securely!")
            st.write("**Your encrypted token:**", token)
            st.info("🔑 Keep this token and your passkey safe.")

# ─────── Retrieve Data ───────
elif choice == "Retrieve Data":
    st.subheader("🔍 Retrieve Your Data")
    token = st.text_area("1. Paste your encrypted token:")
    passkey = st.text_input("2. Enter your passkey:", type="password")

    if st.button("Decrypt"):
        if not token or not passkey:
            st.error("⚠️ Both token and passkey are required!")
        else:
            # Check: is there an entry and does the hash match?
            hashed = hash_passkey(passkey)
            stored_hash = st.session_state.stored_data.get(token)

            if stored_hash == hashed:
                # Success! reset counter and decrypt
                st.session_state.failed_attempts = 0
                clear = decrypt_data(token)
                st.success(f"✅ Your data: **{clear}**")
            else:
                # Wrong passkey / token
                st.session_state.failed_attempts += 1
                rem = 3 - st.session_state.failed_attempts
                st.error(f"❌ Incorrect! Attempts left: {rem}")

                # On 3 wrong tries, force Login
                if st.session_state.failed_attempts >= 3:
                    st.warning("🔒 Too many failed attempts! Please go to **Login**.")
                    # Optionally auto‑rerun: st.experimental_rerun()

# ─────── Login Page ───────
elif choice == "Login":
    st.subheader("🔑 Reauthorization Required")
    master = st.text_input("Enter master password:", type="password")
    if st.button("Login"):
        if master == "admin123":
            st.session_state.failed_attempts = 0
            st.success("✅ Reauthorized! You can now retry retrieval.")
            # st.experimental_rerun()
        else:
            st.error("❌ Wrong master password.")
