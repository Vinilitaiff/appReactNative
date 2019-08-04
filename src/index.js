import React from 'react';
import { StatusBar } from 'react-native';

import './config/Reactotron.Config';
import Routes from './routes';
// console.tron.log('teste sistema');

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ff99bb" />
      <Routes />
    </>
  );
}
