import React, { Component } from 'react';
import {
  View,
} from 'react-native';

class Section extends Component {
  render() {
    return (
      <View style={styles.sectionStyle}>
        { this.props.children }
      </View>
    );
  }
}

const styles = {
  sectionStyle: {
    paddingTop: 5,
    paddingBottom: 5,
  }
};
export { Section };
