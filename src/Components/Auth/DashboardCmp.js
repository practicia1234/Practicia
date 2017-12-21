import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { LogoutAction } from '../../actions';
import { Section, Button } from '../Helpers';

class DashboardCmp extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  LogoutAction() {
    this.props.LogoutAction(); // Action call
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Section>
              <Text>Welcome to PRACTICIA!!</Text>
          </Section>
          <Section>
            <Button
              onPress={this.LogoutAction.bind(this)}
              style={styles.buttonLogin}
            >
              Logout
            </Button>
          </Section>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    padding: 10,
    flex: 1
  },
};

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(mapStateToProps, { LogoutAction })(DashboardCmp);
