import React, { useState } from 'react';
import { Text, StyleSheet,SafeAreaView } from 'react-native';
import TextInput from "react-native-text-input-interactive";

const PHONE_REGEX = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;


const PhoneNumberInput = () => {

    const [phoneNumber, setPhoneNumber] = useState();
    const [inputColor, setInputColor] = useState("purple");
    const [error, setError] = useState("");

    const handleValidate = (num) => {
        if (PHONE_REGEX.test(num)) {
            console.log("not correct")
            setPhoneNumber(num)
            setInputColor("green")
            setError("")

        } else {
            console.log("Invalid phone number. Please try again.");
            setPhoneNumber(num)
            setInputColor("red")
            setError("Invalid phone number")
        }
        return PHONE_REGEX.test(num);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder={"Phone Number"}
                onChangeText={(text) => handleValidate(text)}
                value={phoneNumber}
                mainColor={inputColor}
                keyboardType="numeric"
            />
            <Text style={{...styles.text, color:inputColor}}>{error}</Text>
        </SafeAreaView>

    );
};

export default PhoneNumberInput

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        padding:20
    },
    text:{
        margin:5,
        
    }
});
