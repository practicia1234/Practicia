import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { incrementAction, decrementAction } from '../actions/actionCreator';

class Screen1View extends Component {
  static navigationOptions = {
    title: 'Screen1'
  };

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: 'screen2',
      params: { name: 'Shubhnik' }
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };

  incrementActionNew() {
    this.props.incrementAction();
  }

  render() {
    const { counter } = this.props.CounterReducer;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellowgreen',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>counterCount: {counter}</Text>
        <View style={{ height: 100, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={this.incrementActionNew.bind(this)}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={{ textDecorationLine: 'underline', fontWeight: '600' }}
            >
              INCREMENT NEW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.decrementAction()}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={{ textDecorationLine: 'underline', fontWeight: '600' }}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: 'indigo'
          }}
          onPress={this.navigate}
        >
          <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
            Screen2
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  console.log(state);
  return state;
};

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1View);
