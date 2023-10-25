import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, 
         View, ImageBackground, TouchableOpacity, 
         TextInput, Switch, 
         KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import React, { useState } from 'react';

export default function App() {

  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text>Hozsddsqdsq</Text>
      <ImageBackground source={require('./assets/background.jpeg')} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.welcomeTextContainer}>
                  <Text style={styles.welcomeText}>Welcome to social 👋 </Text>
                </View>
                <View style={styles.bodyTextContainer}>
                  <Text style={styles.bodyText}>
                    At social we believe in  a new type of interaction.
                    {"\n"} {"\n"}
                    One that crosses the boundaries of what was possible before.
                    {"\n"} {"\n"}
                    Sign up today and check out the future of social networking.
                    {"\n"} {"\n"} 
                  </Text>
                </View>
                <View style={styles.signUpContainer}>
                  <TextInput
                    style={styles.emailInput}
                    value = {email}
                    onChangeText = {setEmail}
                  >
                  </TextInput>
                  <View style={styles.newsLetterContainer}>
                      <View>
                        <Switch></Switch>
                      </View>
                      <View style={styles.newsLetterGrow}>
                        <Text style={styles.newsLetterText}>Sign up to our newsletter to hear the latest news before anyone else</Text>
                      </View>
                  </View>
                  <TouchableOpacity style={styles.signUp}>
                    <Text style={styles.signUpText}>Sign up </Text>
                  </TouchableOpacity>
                </View>
            </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

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
  }

});
