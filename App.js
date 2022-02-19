import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './Components/AppNavigator';
import RegisterLogin from './Components/RegisterLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
      {/* <RegisterLogin/> */}
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
