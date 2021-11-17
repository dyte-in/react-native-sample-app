import { DrawerActions, CommonActions, StackActions } from '@react-navigation/native'
import { navigationRef } from '@src/routes'

export type Params = { [key: string]: any }

const RootNavigator = {
  navigate: (name: string, params?: Params) => {
    navigationRef.current?.dispatch(CommonActions.navigate(name, params))
  },
  //@ts-ignore
  reset: (params: any) => {
    navigationRef.current?.dispatch(CommonActions.reset(params))
  },
  push: (routeName: string, params?: Params) => {
    navigationRef.current?.dispatch(StackActions.push(routeName, params))
  },
  pop: () => {
    navigationRef.current?.dispatch(StackActions.pop())
  },
  closeDrawer: () => {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer())
  },
  openDrawer: () => {
    navigationRef.current?.dispatch(DrawerActions.openDrawer())
  },
  toggleDrawer: () => {
    navigationRef.current?.dispatch(DrawerActions.toggleDrawer())
  },
  getCurrentScene: () => {
    return navigationRef.current?.getCurrentRoute()?.name
  },
}
const Actions = {
  reset: (routeName: string, params?: Params) => {
    const resetNavState = {
      index: 0,
      routes: [
        {
          name: routeName,
          params: params || {},
        },
      ],
    }
    RootNavigator.reset(resetNavState)
  },
  pop: () => {
    RootNavigator.pop()
  },
  push: (routeName: string, params?: Params) => {
    RootNavigator.push(routeName, params)
  },
  navigate: (routeName: string, params?: Params, navigator?: any) => {
    if (navigator) {
      navigator.navigate(routeName, params)
    } else {
      console.log(routeName)
      RootNavigator.navigate(routeName, params)
    }
  },
  closeDrawer: () => {
    RootNavigator.closeDrawer()
  },
  openDrawer: () => {
    RootNavigator.openDrawer()
  },
  toggleDrawer: () => {
    RootNavigator.toggleDrawer()
  },
  currentScene: () => {
    return RootNavigator.getCurrentScene()
  },
}

export default Actions
