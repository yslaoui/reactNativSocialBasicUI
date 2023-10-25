import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hozsdq</Text>
      <ImageBackground source={require('./assets/background.jpeg')} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Welcome to social 👋 </Text>
            </View>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyText}>
                At social we believe in a new type of interaction.
                {"\n"} {"\n"}
                One that crosses the boundaries of what was possible before.
                {"\n"} {"\n"}
                Sign up today and check out the future of social networking.
                {"\n"} {"\n"} 
              </Text>
            </View>
            <View style={styles.signUpContainer}></View>
        </SafeAreaView>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  welcomeTextContainer : 
  {
    backgroundColor: "red", 
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
  bodyTextContainer: 
  {
    backgroundColor: "yellow", 
    paddingTop: 20, 
    paddingBottom: "20%", 
    paddingLeft: "10%",
    paddingRight: "10%" 
  },
  signUpContainer: 
  {
    backgroundColor: "blue", 
    paddingTop: "10%", 
    justifyContent: "flex-end", 
  }, 
  bodyText: 
  {
    fontSize: 17
  }  

});
