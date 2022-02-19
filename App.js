import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserInputFive from './Components/UserInputForm/UserInputFive';
import UserInputTwo from './Components/UserInputForm/UserInputTwo'
import Login from './Components/Login'
import AppNavigator from './Components/AppNavigator';
import SandBox from './Components/sandBox'
export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
      {/* <SandBox/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
