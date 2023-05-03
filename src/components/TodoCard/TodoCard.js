import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './TodoCard.styles';
import Feather from 'react-native-vector-icons/Feather';

const TodoCard = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.todoDone}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.deleteTodo}>
                <Feather name="trash" size={20} />
            </TouchableOpacity>

        </View>

    )
}

export default TodoCard;