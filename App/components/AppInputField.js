/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// common input field used through the app

import {View, TextInput} from 'react-native';
import Colors, { styles } from './AppColors';
import AppIcon from './AppIcon';

export default function AppInputField({props, keyboardType, placeholder, icon, onChangeText, value, secure}){
    return(
        <View style = {styles.inputField}>
            <AppIcon icon = {icon}/>
            <TextInput 
                placeholder={placeholder || 'default text'} 
                style ={styles.inputText}
                onChangeText = {onChangeText}
                value = {value}
                secureTextEntry={secure}
                keyboardType={keyboardType}/>
        </View>
    );
} 