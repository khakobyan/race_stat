import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {widthPercentageToDP} from '../helpers/sizes';
import { DARK_GREY } from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RacersScreen from '../screens/racers';
import RacerScreen from '../screens/racer';
import RacesScreen from '../screens/races';
import MoreInfoScreen from '../screens/more_info';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Racesr"
      screenOptions={{gestureEnabled: false, headerShown: false}}
      barStyle={{ backgroundColor: DARK_GREY }}
    >
      <Tab.Screen
        name="Racers"
        options={{
          tabBarLabel: 'Racers',
          tabBarIcon: ({color}) => (
            <Icon color={color} name="car" size={widthPercentageToDP('6')} />
          ),
        }}
      >
        {() => (
          <Stack.Navigator screenOptions={{animationEnabled: false}}>
            <Stack.Screen
              name="Racers"
              component={RacersScreen}
              options={{headerTitleAlign: 'center'}}
            />
            <Stack.Screen 
              name="Racer"
              component={RacerScreen}
              options={({route}) => ({headerTitleAlign: 'center', headerTitle: route.params.racer_name})}
            />
            <Stack.Screen 
              name="Races"
              component={RacesScreen}
              options={({route}) => ({headerTitleAlign: 'center', headerTitle: `${route.params.racer_name}'s races`})}
            />
            <Stack.Screen 
              name="MoreInfo"
              component={MoreInfoScreen}
              options={({route}) => ({headerTitleAlign: 'center', headerTitle: `${route.params.racer_name}'s more info`})}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default RootStack;
