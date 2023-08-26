import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import ProductDetail from './src/screens/productDetail/ProductDetail';
import Cart from './src/screens/cart/Cart';

const Stack  = createStackNavigator();

const RouterComp = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator name = 'mainStack' initialRouteName = 'home'>
            <Stack.Screen name = 'home' options = {{headerShown: false}} component = {Home}></Stack.Screen>
            <Stack.Screen name = 'productDetail' options = {{headerShown: false}} component = {ProductDetail}></Stack.Screen>
            <Stack.Screen name = 'cart' options = {{headerShown: false}} component = {Cart}></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  )
}


const mapStateToProps = state => {
    return{
  
    }
  }
export default connect(mapStateToProps, {})(RouterComp)