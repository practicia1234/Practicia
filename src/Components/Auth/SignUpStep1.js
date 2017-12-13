import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class SignUpStep1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.userType}> Teacher</Text>
        <Text style={styles.userType}> Parent</Text>
        <Text style={styles.userType}> Adult Student (+18)</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 10,
    backgroundColor: '#D2EEF7',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    margin: 10,
    flex: 1,
    justifyContent: 'center',
  },
  userType: {
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: '#3BAFDA',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
  }
};

export default SignUpStep1;
