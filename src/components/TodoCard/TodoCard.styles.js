import { StyleSheet } from "react-native";
export default StyleSheet.create({
         container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#7DA453',
            padding: 13,
            borderRadius: 5,
            margin: 5,
         },
         text: {
            color: 'white',
            fontSize: 16,
         },
         doneActive: {
            backgroundColor: "#37474F",
            textDecorationLine: 'line-through'
         }
});