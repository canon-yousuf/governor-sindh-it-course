import streamlit as st

def length_conversion(value, from_unit, to_unit):
    # Base unit is meters
    length_units = {
        'Meters': 1,
        'Kilometers': 1000,
        'Centimeters': 0.01,
        'Millimeters': 0.001,
        'Miles': 1609.34,
        'Yards': 0.9144,
        'Feet': 0.3048,
        'Inches': 0.0254
    }
    # Convert to base unit first
    base_value = value * length_units[from_unit]
    # Convert from base unit to target unit
    return base_value / length_units[to_unit]

def weight_conversion(value, from_unit, to_unit):
    # Base unit is kilograms
    weight_units = {
        'Kilograms': 1,
        'Grams': 0.001,
        'Pounds': 0.453592,
        'Ounces': 0.0283495
    }
    base_value = value * weight_units[from_unit]
    return base_value / weight_units[to_unit]

def temperature_conversion(value, from_unit, to_unit):
    if from_unit == 'Celsius':
        if to_unit == 'Fahrenheit':
            return (value * 9/5) + 32
        elif to_unit == 'Kelvin':
            return value + 273.15
    elif from_unit == 'Fahrenheit':
        if to_unit == 'Celsius':
            return (value - 32) * 5/9
        elif to_unit == 'Kelvin':
            return (value - 32) * 5/9 + 273.15
    elif from_unit == 'Kelvin':
        if to_unit == 'Celsius':
            return value - 273.15
        elif to_unit == 'Fahrenheit':
            return (value - 273.15) * 9/5 + 32
    return value

# Set page title
st.title('Unit Converter')

# Create conversion categories
conversion_type = st.selectbox(
    'Select Conversion Type',
    ['Length', 'Weight', 'Temperature']
)

# Input value
value = st.number_input('Enter Value', value=0.0)

if conversion_type == 'Length':
    length_units = ['Meters', 'Kilometers', 'Centimeters', 'Millimeters', 
                   'Miles', 'Yards', 'Feet', 'Inches']
    from_unit = st.selectbox('From Unit', length_units)
    to_unit = st.selectbox('To Unit', length_units)
    if st.button('Convert'):
        result = length_conversion(value, from_unit, to_unit)
        st.success(f'{value} {from_unit} = {result:.4f} {to_unit}')

elif conversion_type == 'Weight':
    weight_units = ['Kilograms', 'Grams', 'Pounds', 'Ounces']
    from_unit = st.selectbox('From Unit', weight_units)
    to_unit = st.selectbox('To Unit', weight_units)
    if st.button('Convert'):
        result = weight_conversion(value, from_unit, to_unit)
        st.success(f'{value} {from_unit} = {result:.4f} {to_unit}')

elif conversion_type == 'Temperature':
    temp_units = ['Celsius', 'Fahrenheit', 'Kelvin']
    from_unit = st.selectbox('From Unit', temp_units)
    to_unit = st.selectbox('To Unit', temp_units)
    if st.button('Convert'):
        result = temperature_conversion(value, from_unit, to_unit)
        st.success(f'{value} {from_unit} = {result:.2f} {to_unit}') 