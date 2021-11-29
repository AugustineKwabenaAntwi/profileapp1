import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import profile from "./assets/profile.jpg"

export default function App() {
  return (
    <View style ={styles.container}>
      <Image style={styles.image} source={profile}/>

      <View style={styles.detailsCont}>
        <Text style = {styles.label}>Name</Text>
        <Text style ={[styles.label,styles.info]}>Augustine Antwi</Text>
      </View>


      <View style={styles.detailsCont}>
        <Text style = {styles.label}>Gmail</Text>
        <Text style ={[styles.label,styles.info]}>suck@python.com</Text>
      </View>


      <View style={styles.detailsCont}>
        <Text style = {styles.label}>Gender</Text>
        <Text style ={[styles.label,styles.info]}>Male</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
  
    backgroundColor:"#6a7062"
  },
  detailsCont:{
    flexDirection:"row",
    marginVertical:5,
    textAlign:"center"

  },
  image:{
    marginTop:150,
    width:200,
    height:200,
    marginBottom:20,
    borderRadius:100,
    alignSelf:"center"
  },
  label:{
    borderColor:"black",
    borderWidth: 3,
    fontSize:20,
    flex:2.5,
    paddingHorizontal:3,
    borderRadius:100,
    textAlign:"center"
  },
  info:{
    flex:7.5,
    paddingLeft:5,
    borderRadius:100

  }
});
