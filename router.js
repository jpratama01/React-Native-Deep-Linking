import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './home';
import People from './people';

const Router = createStackNavigator({
  Home: {screen: Home},
  People: {screen: People},
});
const AppContainer = createAppContainer(Router);
export default AppContainer;
