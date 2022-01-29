import React from 'react';
import {
  SafeAreaView,
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import ListEntries from './components/ListEntries';
import TimeSelect from './components/TimeSelect';

const App = () => {
  let x = 1;
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Alarmate </Text>
      <SafeAreaView style={styles.ListEntries}>
        <ListEntries />
      </SafeAreaView>
      <View style={styles.TimeSelect}>
        <TimeSelect />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    padding: 40,
  },
  TimeSelect: {
    paddingTop: '10%',
    width: '50%',
    bottom: 20,
  },
  ListEntries: {
    flex: 1,
    width: '100%',
  }
});

export default App;