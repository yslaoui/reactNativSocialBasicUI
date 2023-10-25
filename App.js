import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>yassinOUWxsxs</Text>
      <ImageBackground source={require('./assets/background.jpeg')} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.SafeAreaView}>

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

  }
});
