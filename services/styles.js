import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignUpScreen from '../components/SignUpScreen';


const styles = StyleSheet.create({
  // Overall container
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SafeAreaView: 
  {
    flex: 1
  },
  image :
  {
    flex: 1, 
    width: "100%", 
    height: "100%", 
    justifyContent: "center"

  },

  // Welcome text View
  welcomeTextContainer : 
  {
    // backgroundColor: "red", 
    flex: 1,
    justifyContent: "flex-end", 
    paddingLeft: "10%",
    paddingRight: "10%" 
  }, 
  welcomeText: 
  {
    fontSize: 55, 
    fontWeight: "bold"
  },  

  // Body text View
  bodyTextContainer: 
  {
    // backgroundColor: "yellow", 
    paddingTop: 20, 
    paddingBottom: "20%", 
    paddingLeft: "10%",
    paddingRight: "10%" 
  },
  bodyText: 
  {
    fontSize: 17
  },

  // Email Input
  emailInput: 
  {
    borderWidth: 3, 
    borderRadius: 17, 
    borderColor: "black", 
    width: "90%", 
    height: 60, 
    marginLeft: "5%", 
    marginRight: "5%", 
    marginBottom: 20,
    paddingLeft: "10%", 
    paddingRight: "10%",
    textAlign: "center",
    fontSize: 18, 
    backgroundColor: "white"
  },

  // newsletter sign in 
  newsLetterContainer: 
  {
    flexDirection: 'row', 
    width: "90%",
    paddingLeft: "5%",
    paddingBottom: "5%",


  },
  newsLetterGrow: 
  {
    flexGrow: 1, 
    flex: 1 // This is a bug fix
  },

  newsLetterText: 
  {
    paddingLeft: 15
  },

  // sign up

  signUpContainer: 
  {
    // backgroundColor: "blue", 
    paddingTop: "10%", 
    justifyContent: "flex-end", 
  }, 
  signUp: 
  {
    width: "90%", 
    height: 70, 
    borderRadius: 35, 
    marginLeft: "5%", 
    marginBottom: 10, 
    backgroundColor: "black", 
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  },  
  signUpText: 
  {
    textAlign: "center",
    color: "white", 
    fontWeight: "bold", 
    fontSize: 28
  },
  SignUpScreen: 
  {
    flex: 1, 
    justifyContent: 'flex-end',
    width: "90%", 
    height: 70, 
    borderRadius: 35, 
    marginLeft: "5%", 
    marginBottom: 10, 

  }

});



  export default styles;