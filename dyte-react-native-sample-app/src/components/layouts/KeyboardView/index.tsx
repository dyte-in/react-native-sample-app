import React from 'react'
import { Platform, KeyboardAvoidingView } from 'react-native'

const KeyboardView = ({ children }) => {
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={10}
      >
        {children}
      </KeyboardAvoidingView>
    )
  } else {
    return <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
  }
}

export default KeyboardView
