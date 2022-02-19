import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserInputOne from './UserInputForm/UserInputOne'
import UserInputTwo from './UserInputForm/UserInputTwo'
import UserInputThree from './UserInputForm/UserInputThree'
import UserInputFour from './UserInputForm/UserInputFour'
import UserInputFive from './UserInputForm/UserInputFive'

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UserInputOne" component={UserInputOne} />
            <Stack.Screen name="UserInputTwo" component={UserInputTwo} />
            <Stack.Screen name="UserInputThree" component={UserInputThree} />
            <Stack.Screen name="UserInputFour" component={UserInputFour} />
            <Stack.Screen name="UserInputFive" component={UserInputFive} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}