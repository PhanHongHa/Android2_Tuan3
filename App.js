
import React from "react";
import { StyleSheet, View, Text , Image, Button} from "react-native";
 
export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
      <Image source={require('./img/circle.png')} style={styles.img}/>


      </View>
      <View style={styles.body} >
        <Text>
        GROW YOUR BUSINESS
        
       
        </Text>
        <Text>
        We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.footer} >
        <View  style={styles.button}>
          
          <Button
            title="Log in"
            style={styles.btnLI}
          >

          </Button>
          <Button 
            title="Sign up"
            style={styles.btnSU}
          ></Button>
         
        </View>
        <Text style={styles.text}>
            HOW WE WORK?
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  header: {
    flex: 1
  },
  img:{
    
   marginLeft: 125, 
   marginTop: 80
  
  },
  body: {
    flex: 1,
    
  },
  footer: {
    flex: 1,
   
  },
  button:{
    marginTop: 30
  },
  text:{
    marginTop: 30,
    alignItems: "center"
  }

});