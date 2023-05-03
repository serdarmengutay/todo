import React from 'react'
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import styles from './AddTodo.styles'

const AddTodo = (props) => {
  return (
    <View>
        <View style={styles.input_container}>
            <TextInput 
            placeholder='Yapılacak...'
            onChangeText={props.onChangeText}
            value={props.value}
            />
            <View style={styles.seperator} />
            <TouchableOpacity  style={
          props.value.length > 0 ? styles.saveButtonActive : styles.save_button
        }
        onPress={props.onPress}>
                <Text style={styles.save_text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AddTodo
