import {React, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, 
  View, ImageBackground, TouchableOpacity, 
  TextInput, Switch, 
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../services/styles';


const HomeScreen = ({navigation}) => 
{
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text>Made with ❤ by @Cabrero</Text>
      <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={styles.image}>
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
                    placeholder='Your email address'
                    style={styles.emailInput}
                    defaultValue = {email}
                    onChangeText = {email => setEmail(email)}
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
                  <TouchableOpacity 
                    style={styles.signUp}
                    onPress = {() => navigation.navigate("SignUp", {emailText: email})}
                    >
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

  /*
  return (
    <View style={styles.container}>
      <Text> This is the home screen</Text>
      <Button 
        title = 'totheDetails' 
        onPress = {() => props.navigation.navigate("Detail")}
        />
    </View>
  )
*/
}


export default HomeScreen