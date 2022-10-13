import React, { useState, useEffect } from "react";

import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";

import apiLivraria from "../service/apiLivraria";
import capaLivro150 from "../assets/livros/lor150.png"

import COLORS from "../const/colors";

const Detalhes = ()=>{

   const cod_livro = 1;

   const[livro, setLivro] = useState({
      cod_livro:'',
      titulo:'',
      descricao:'',
      imagem:'',
   });

   useEffect(
      ()=>{
         apiLivraria.get(`/listarLivros/${cod_livro}`)
         .then(
            (livro)=>{
               setLivro(livro.data[0])
            }
         )
      }
   );

   return(

      <ScrollView>

         <View style={estilos.container}>
            <View style={estilos.post}>
               <Image style={estilos.imagem} source={capaLivro150}/>
               <Text style={estilos.titulo}>{livro.titulo}</Text>
               <Text style={estilos.descricao}>{livro.descricao}</Text>
            </View>

            <View style={estilos.botoes}>

               <TouchableOpacity
                  style={estilos.botao}
                  onPress={()=>{}}>
                  <Text style={estilos.textoBotao,{backgroundColor:}}>Editar</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={estilos.botao}
                  onPress={()=>{}}>
                  <Text style={estilos.textoBotao}>Excluir</Text>
               </TouchableOpacity>
               
            </View>
   
         </View>

      </ScrollView>

   )

}

const estilos = StyleSheet.create({
   container:{
      alignItems: 'center'
   },
   post:{
      width: '95%',
      alignItems: 'center',
      backgroundColor:'#ccc',
      marginVertical:5,
      borderRadius:5,
      elevation:10,
   },
   imagem:{
      borderRadius:5,
      marginVertical:16,
      marginLeft:16,

   },
   titulo:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
   },
   descricao:{
      width:'100%',
      fontSize:10,
      textAlign:'justify',
      alignItems:"center"
   },
   botoes:{
      flex:1,
      flexDirection:'row',
      padding:10,
      justifyContent:'center',
   },
   botao:{
      width:'50%',
      marginHorizontal:10,
   },
   textoBotao:{
      padding:10,
      textAlign:"center",
      color:COLORS.white,
      fontWeight:'bold',
      fontSize:16
   }
});

export default Detalhes