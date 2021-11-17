import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { Props } from './type'

const Loading = ({ loading, overlay = `rgba(0, 0, 0, 0.5)` }: Props) => {
  return <Spinner visible={loading} overlayColor={overlay} />
}

export default Loading
