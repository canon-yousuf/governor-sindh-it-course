import streamlit as st
import pandas as pd
import os
from io import BytesIO

# Set Up our App
st.set_page_config(page_title="💿 Data Sweeper", layout="wide")

st.title("Data Sweeper")
st.write("Transform your files between CSV and Excel formats with built-in data cleaning tools and visualization!")

uploaded_files = st.file_uploader("Upload your CSV or Excel file", type=['csv', 'xlsx'], accept_multiple_files=True)

if uploaded_files:
    for file in uploaded_files:
        file_ext = os.path.splitext(file.name)[1].lower()
        
        # Try reading the file; show error if it fails
        try:
            if file_ext == '.csv':
                df = pd.read_csv(file)
            elif file_ext == '.xlsx':
                df = pd.read_excel(file, engine='openpyxl')
            else:
                st.error(f"Unsupported file type: {file_ext}")
                continue
        except Exception as e:
            st.error(f"Error reading {file.name}: {e}")
            continue
        
        # Display file info
        st.write(f"**File Name:** {file.name}")
        st.write(f"**File Size:** {file.size / 1024:.2f} KB")
        st.write("Preview the Head of the DataFrame")
        st.dataframe(df.head())

        # Data Cleaning Options
        st.subheader(f"Data Cleaning Options for {file.name}")
        if st.checkbox(f"Clean Data for {file.name}"):
            col1, col2 = st.columns(2)
            with col1:
                if st.button(f"Remove Duplicates from {file.name}"):
                    df.drop_duplicates(inplace=True)
                    st.write("✅ Duplicates Removed")
            with col2:
                if st.button(f"Fill Missing Values for {file.name}"):
                    numeric_cols = df.select_dtypes(include=['number']).columns
                    if not numeric_cols.empty:
                        df[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].mean())
                        st.write("✅ Missing Values Filled")
                    else:
                        st.write("No numeric columns available to fill missing values.")

            # Choose Specific Columns to Keep
            st.subheader("Choose Specific Columns to Convert")
            columns = st.multiselect(f"Choose Columns for {file.name}", list(df.columns), default=list(df.columns))
            if columns:
                df = df[columns]
            else:
                st.error("Please select at least one column.")
                continue

            # Data Visualization
            st.subheader("📊 Data Visualization")
            if st.checkbox(f"Show Visualization for {file.name}"):
                numeric_data = df.select_dtypes(include='number')
                if not numeric_data.empty:
                    st.bar_chart(numeric_data)
                else:
                    st.write("No numeric data available for visualization.")

            # Conversion Options
            st.subheader("Conversion Options")
            conversion_type = st.radio(f"Convert {file.name} to", ['CSV', 'Excel'], key=file.name)

            if st.button(f"Convert {file.name}"):
                buffer = BytesIO()
                if conversion_type == 'CSV':
                    csv_data = df.to_csv(index=False)
                    buffer.write(csv_data.encode('utf-8'))
                    mime_type = 'text/csv'
                    converted_ext = '.csv'
                elif conversion_type == 'Excel':
                    try:
                        # Use openpyxl as the engine for writing Excel files
                        with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
                            df.to_excel(writer, index=False, sheet_name="Sheet1")
                        mime_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        converted_ext = '.xlsx'
                    except Exception as e:
                        st.error(f"Error during Excel conversion: {e}")
                        continue
                buffer.seek(0)
                file_name = file.name.replace(file_ext, converted_ext)
                st.download_button(
                    label=f"Download {file.name} as {conversion_type}",
                    data=buffer,
                    file_name=file_name,
                    mime=mime_type,
                )
        st.success("✅ All files processed successfully!")
