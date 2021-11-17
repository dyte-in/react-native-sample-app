import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { Home, Meetings, CustomButtons } from '@src/screens'
import { HeaderBackground } from '@react-navigation/stack'
import colors from '@src/styles/colors'
const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Meeting" component={Meetings} />
      <Stack.Screen name="Custom Buttons" component={CustomButtons} />
    </Stack.Navigator>
  )
}

export default StackNavigator
