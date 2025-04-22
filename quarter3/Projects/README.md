# Secure Data Encryption System

A Streamlit-based application for secure, in-memory data storage and retrieval using unique passkeys and Fernet encryption.

## 🔒 Features

- **Encrypt & Store**: Securely encrypt text with a user-defined passkey.
- **Passkey Hashing**: Passkeys are hashed using SHA-256 before storage.
- **Fernet Encryption**: Symmetric encryption/decryption powered by the `cryptography` library.
- **Three-Attempt Lockout**: After 3 failed decryption attempts, users must reauthorize via a Login page.
- **In-Memory Only**: No external database—data lives in Streamlit’s session state.

## 🛠️ Requirements

- Python 3.8+
- [Streamlit](https://streamlit.io/)
- [cryptography](https://cryptography.io/)

## 🚀 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/canon-yousuf/governor-sindh-it-course/tree/main/quarter3/Projects/assignment05/secure_data_encryption
   
   ```
2. **Create & activate a virtual environment**
   ```bash
   python -m venv venv
   # macOS/Linux
   source venv/bin/activate
   # Windows
   venv\Scripts\activate
   ```
3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

## ▶️ Usage

Run the Streamlit app:
```bash
streamlit run app.py
```

- **Home**: Overview and navigation tips.
- **Store Data**: Enter your text and passkey to generate an encrypted token.
- **Retrieve Data**: Paste the token and enter the passkey to decrypt. After 3 wrong attempts, you’ll need to reauthorize.
- **Login**: Reset failed attempts by entering the master password (`admin123` by default).

## 📁 File Structure

```
.
├── app.py             # Main Streamlit application
├── requirements.txt   # Python dependencies
└── README.md          # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is licensed under the MIT License © 2025 Canon Yousuf
