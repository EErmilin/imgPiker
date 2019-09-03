import {createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import PhotoScreen from './PhotoScreen'
import DescriptionScreen from './DescriptionScreen'
import {home, photo, description } from '../routes'

export default createStackNavigator(
  {
  [home]: HomeScreen,
  [photo]: PhotoScreen,
  [description]: DescriptionScreen
  },
  {
    headerMode : 'none'
  }
)
  