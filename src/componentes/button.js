import React from "react";
import { TouchableOpacity, StyleSheet, Text,  } from "react-native";
import COLORS from "../const/colors";

const Button = ({title}) => {

   return (

      <TouchableOpacity style={estilos.Button} activeOpacity={0.5}>
         <Text style={estilos.Title}>{title}</Text>
      </TouchableOpacity>

   )

}


const estilos  = StyleSheet.create({

   Button:{
      height:55,
      width:"100%",
      backgroundColor:COLORS.blue,
      justifyContent:"center",
      alignItems:"center",
      marginVertical:20,
   },
   Title:{
      color:COLORS.white,
      fontWeight:"bold",
      fontSize:10,
      textTransform:"uppercase",
   }
});





export default Button;