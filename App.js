// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirebaseLogin from './firebase-login/FirebaseLogin';
import FirebaseCrearCuenta from './firebase-login/FirebaseCrearCuenta';
import FirebaseRecuperarCuenta from './firebase-login/FirebaseRecuperarCuenta';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={FirebaseLogin} options={{ title: 'Inicio de Sesión' }} />
        <Stack.Screen name="CrearCuenta" component={FirebaseCrearCuenta} options={{ title: 'Crear Cuenta' }} />
        <Stack.Screen name="RecuperarCuenta" component={FirebaseRecuperarCuenta} options={{ title: 'Recuperar Contraseña' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Resumen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
