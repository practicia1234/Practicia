import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import {
  selectTeacherAction
} from '../../actions/authenticationAction'; // action included

class SelectTeachers extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Sign Up [Step-2]',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    }
  }

  onPressSelectTeacher(teacherInfo, e) {
    const payloadData = {
      switchButton: e,
      teacherInfo,
    };
    this.props.selectTeacherAction(payloadData);
  }

checkStatus(data, teacherId) {
  return false;
  /*
  if (typeof (data) === 'undefined') {
  return false;
  }
  if (typeof (data[teacherId]) === 'undefined') {
    return false;
  }
  return data[teacherId];
  */
}

  render() {
    const list = [
      {
        id: 1,
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        id: 2,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        id: 3,
        name: 'Amy Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      }
    ];
    console.log(this.props.authenticationReducer);
    return (
      <View>
        <View>
          <Text>
            Select teachers
          </Text>
        </View>
        <ScrollView>
          <List containerStyle={{ marginBottom: 20 }}>
            {list.map((listSingle, key) => (
               <ListItem
                 roundAvatar
                 avatar={{ uri: listSingle.avatar_url }}
                 key={key}
                 title={listSingle.name}
                 switchButton
                 hideChevron
                 switched={false}
                 onSwitch={this.onPressSelectTeacher.bind(this, listSingle)}
               />
             ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  selectTeacherAction
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTeachers);
