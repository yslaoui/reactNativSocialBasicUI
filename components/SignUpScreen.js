import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../services/styles';


const SignUpScreen = ({route, navigation}) => 
{
  return (
    <View style={styles.container} >
      <View style={{flex: 1, "justifyContent": "center" }}>
        <Text style={{fontSize: 30, textAlign: "center"}}> Thank you for signing in  {route.params.emailText} !</Text>
      </View>
      <View style={styles.SignUpScreen}>
        <TouchableOpacity 
          style={styles.signUp}
          onPress = {() => navigation.navigate("Home")}
        >
          <Text style={styles.signUpText}>Back to Home </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen;