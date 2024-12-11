import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}
function RegisterScreen({ setLoggedIn, setUserData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = { username, password };
    setUserData(userData);
    setLoggedIn(true);
    alert(`Registered with username: ${username}, email: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
function LoginScreen({ setLoggedIn, setUserData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData = { username };
    setUserData(userData);
    setLoggedIn(true); 
    alert(`Logged in: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
function ProfileScreen({ loggedIn, setLoggedIn, setUserData }) {
  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>You are logged in!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setLoggedIn(false);
            setUserData(null);
          }}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <ProfileNavigator setLoggedIn={setLoggedIn} setUserData={setUserData} />
    );
  }
}
const TopTab = createMaterialTopTabNavigator();
function ProfileNavigator({ setLoggedIn, setUserData }) {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Register">
        {() => <RegisterScreen setLoggedIn={setLoggedIn} setUserData={setUserData} />}
      </TopTab.Screen>
      <TopTab.Screen name="Login">
        {() => <LoginScreen setLoggedIn={setLoggedIn} setUserData={setUserData} />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
}
function TimetableScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [newEvent, setNewEvent] = useState('');
  const [events, setEvents] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAddEvent = () => {
    if (!selectedDate || !newEvent.trim()) {
      alert('Please select a date, time, and enter an event.');
      return;
    }
    const eventTime = selectedTime ? selectedTime : "No time specified";
    setEvents((prevEvents) => ({
      ...prevEvents,
      [selectedDate]: [
        ...(prevEvents[selectedDate] || []),
        { event: newEvent, time: eventTime },
      ],
    }));
    setNewEvent('');
    setSelectedDate('');
    setSelectedTime('');
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate.toLocaleDateString());
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setSelectedTime(selectedTime.toLocaleTimeString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timetable</Text>