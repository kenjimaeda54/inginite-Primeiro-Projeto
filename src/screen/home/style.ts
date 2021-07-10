import { StyleSheet,Platform } from "react-native";

export const style = StyleSheet.create({
    container:{
       flex:1,
       paddingVertical:50,
       paddingHorizontal:30,
       backgroundColor:"#121015",
    },
    title:{
     fontSize:15,
     lineHeight:25,
     color: "#FFFF",
     fontWeight:"bold",
    },
    textUser:{
        backgroundColor: "#1F1E25",
        color: "#FFFF",
        fontSize:18,
        marginTop:20,
        padding: Platform.OS === "ios"? 50 : 10, 
        /*display IOS possui maior densidade de pixel   */
        borderRadius: 7,
    },
    textGreeting:{
        color: "#FFF",
    }
   
     
})