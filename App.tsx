/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import StackNavigation from './navigation/StackNavigation';
import { StatusBar } from 'react-native';



function App(): React.JSX.Element {
  
  return (
    <>
      <StackNavigation />
      <StatusBar backgroundColor="blue" />
    </>
  );
}

export default App
