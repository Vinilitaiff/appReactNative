import { createAppContainer, createStackNavigator } from 'react-navigation';
// import {} from 'react-native-gesture-handler';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  // config para as rotas funcionarem
  createStackNavigator(
    {
      // tipo de configuracao de rota
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#4078c0',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
