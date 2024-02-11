// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'expo-vector-icons';
import { Image } from 'react-native';

// Styles
import commonStyles from './Styles';

// Screens
import RecipeListScreen from '../screens/RecipeListScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RecipeListStack = () => (
    <Stack.Navigator>
      <Stack.Screen 
        name="RecipeListScreen" 
        component={RecipeListScreen} 
        options={{headerShown: false}}
        />
      <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
    </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            style: commonStyles.tabBar,
            labelStyle: commonStyles.tabBarLabel,
            showLabel: false,
        }}>
      <Tab.Screen 
        name="RecipeListScreen" 
        component={RecipeListStack} 
        options={{ 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <Image 
                    source={require('../assets/icons/cookbook-100.png')}
                    style={{ ...commonStyles.tabBarIcon, tintColor: commonStyles.iconColor}}
                />
            ),
        }}
        />
        <Tab.Screen 
        name="AddRecipeScreen" 
        component={AddRecipeScreen} 
        options={{ 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <Image 
                    source={require('../assets/icons/128/general128-34.jpg')}
                    style={{ ...commonStyles.tabBarIcon, tintColor: commonStyles.iconColor}}
                />
            ),
        }}
        />
      <Tab.Screen 
        name="GroceryListScreen" 
        component={GroceryListScreen} 
        options={{ 
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <Image 
                    source={require('../assets/icons/food-cart-100.png')}
                    style={{ ...commonStyles.tabBarIcon, tintColor: commonStyles.iconColor}}
                />
            ),
        }}
        />
    </Tab.Navigator>
  );
};

export default AppNavigator;
