import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Tab = createMaterialTopTabNavigator();

function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
};
  const handleRegister = () => {
    // Handle registration logic here
    alert(`Registered with username: ${username}, email: ${email}`);
  };
