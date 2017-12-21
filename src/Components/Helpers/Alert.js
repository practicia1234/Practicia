import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class Alert extends Component {
  render() {
    return (
      <View style={styles.alertStyle}>
        <Text style={styles.alertStyleText}>{ this.props.children }</Text>
      </View>
    );
  }
}

const styles = {
  alertStyle: {
    padding: 5,
    backgroundColor: '#F3D1D2',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  alertStyleText: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
};
export { Alert };
