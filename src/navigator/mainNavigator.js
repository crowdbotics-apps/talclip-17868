import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen62341Navigator from '../features/BlankScreen62341/navigator';
import Settings62340Navigator from '../features/Settings62340/navigator';
import UserProfile62333Navigator from '../features/UserProfile62333/navigator';
import Settings62332Navigator from '../features/Settings62332/navigator';
import Settings62330Navigator from '../features/Settings62330/navigator';
import SignIn262328Navigator from '../features/SignIn262328/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen62341: { screen: BlankScreen62341Navigator },
Settings62340: { screen: Settings62340Navigator },
UserProfile62333: { screen: UserProfile62333Navigator },
Settings62332: { screen: Settings62332Navigator },
Settings62330: { screen: Settings62330Navigator },
SignIn262328: { screen: SignIn262328Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
