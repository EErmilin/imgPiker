import {createStackNavigator} from 'react-navigation'
import homeScreen from './homeScreen'
import fotoScreen from './fotoScreen'
import discriptionScreen from './discriptionScreen'
import {home, foto, discription } from '../routes'

export default createStackNavigator(
  {
  [home]: homeScreen,
  [foto]: fotoScreen,
  [discription]: discriptionScreen
  },
  {
    headerMode : 'none'
  }
)
  