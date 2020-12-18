import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from './src/store';
import RootStack from './src/navigation';

const Content = ({children}) => (
  Platform.OS == 'android' ? 
  <SafeAreaView style={{flex: 1}}>
    {children}
  </SafeAreaView> :
  children
);

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
      <Content>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
      </Content>
    </>
  );
};

const AppStoreProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppStoreProvider;
