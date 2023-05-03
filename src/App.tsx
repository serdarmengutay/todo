import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Dimensions, } from "react-native";
import TodoCard from "./components/TodoCard/TodoCard";
import AddTodo from "./components/AddTodo/AddTodo";

const App = () => {
  const [list, setList] = useState([
      "Çöpler Toplancak"
  ])

  const [text, setText] = useState("");

  const addTodoFunc = () => {
    setList([...list, text])
    setText("");
  }

  const deleteTodoFunc = (index: any) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList)
  }

  const [isFocus, setFocus]  = useState(false)
  const doneTodo = () => {
    setFocus(!isFocus)
  }

   return (
      <View style={styles.container}>
        <View style={styles.header}> 
            <Text style={styles.header_title}>Yapılacaklar</Text>
            <Text style={styles.count}>{list.length}</Text>
        </View>
        <View>
          <FlatList 
          data={list}
          renderItem={({item, index}) => 
            <TodoCard 
             text={item} 
             deleteTodo={() => deleteTodoFunc(index)}
             todoDone={() => doneTodo()} />
          }
          />
          
        </View>
        <AddTodo
        value={text}
        onPress={addTodoFunc} 
        onChangeText={setText}/>
      </View>
     
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  header_title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
  },
  count: {
    fontSize: 40,
    color: 'orange'
  },
});

export default App;
