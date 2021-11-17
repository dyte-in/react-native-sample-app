import React from 'react'
import {View} from 'react-native'
import 'react-native-gesture-handler';
import { LoadingContext } from '@src/context';
import Navigation from '@src/routes'
import { Loading } from '@src/components/elements';
import colors from '@src/styles/colors';

export default function App() {
  const [loading, setLoading] = React.useState(false)
  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      <Loading loading={loading} overlay={'rgba(0, 0, 0, 0.5)'} />
      <Navigation
       />
      </LoadingContext.Provider>
  );
}