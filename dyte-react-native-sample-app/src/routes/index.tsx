import React from 'react'
import { NavigationContainer, NavigationContainerRef, DefaultTheme } from '@react-navigation/native'
import StackNavigator from './stackNavigator'
import { enableScreens } from 'react-native-screens'
import colors from '@src/styles/colors'

enableScreens()
export const navigationRef = React.createRef<NavigationContainerRef>()

const MyTheme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    background: colors.secondary['1000']
  }
}


export default function () {
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  )
}
