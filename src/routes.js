import { createAppContainer, createStackNavigator } from 'react-navigation';
// import {} from 'react-native-gesture-handler';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  // config para as rotas funcionarem
  createStackNavigator(
    {
      // tipo de configuracao de rota
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#ff99bb',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
