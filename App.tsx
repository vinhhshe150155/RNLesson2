/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  Button,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
    
      
    
    
//   );
// };

const App: () => Node = () => {
  return (
    
    <View style={{marginTop: "30%",borderWidth: .8,borderRadius: 10, borderColor: "black"}}>
      <View style={{alignItems: "center"}}>
      <Text style={styles.titleFirst}>Yolo System</Text>
      </View>
      
      <TextInput
      placeholder="Tên đăng nhập"
      style={styles.input}
      ></TextInput>
      
      <TextInput
      placeholder="Mật khẩu"
      style={styles.input}
      ></TextInput>
      <TouchableOpacity
      style={styles.buttonLogin}>

        <Text style={styles.customText}>Login</Text>
      </TouchableOpacity>
      <View style={{alignItems: "center"}}>
      <Text style={styles.titleFirst}>Or</Text>
      </View>
      <TouchableOpacity
      style={styles.buttonFacebook}>

        <Text style={styles.customText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.buttonGoogle}>

        <Text style={styles.customText}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    borderColor: "gray",
    borderWidth : 1,
    borderRadius: 10,
    margin: 10,
    marginTop: 0,
    fontSize: 14
  },
  buttonLogin:{
    alignItems: "center",
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0
  },
  buttonFacebook:{
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonGoogle:{
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10
  },
  customText:{
    fontWeight: "bold",
    color: "black"
  },
  titleFirst:{
    fontSize: 50,
    color: "green",
    fontWeight: "bold",
  }
});

export default App;
