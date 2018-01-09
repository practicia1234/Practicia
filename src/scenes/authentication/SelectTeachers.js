import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';

import firebase from 'firebase';
import { development } from '../../config/Firebase';

import {
  selectTeacherAction,
  getTeacherListAction
} from '../../actions/authenticationAction'; // action included

class SelectTeachers extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Select Teacher',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    }
  }

  componentWillMount() {
    // Firebase initialise
    firebase.initializeApp(development);
    this.props.getTeacherListAction();
  }

  onPressSelectTeacher(teacherInfo, e) {
    const payloadData = {
      switchButton: e,
      teacherInfo,
    };
    this.props.selectTeacherAction(payloadData);
  }
  checkStatus(id) {
    const arrayIds = this.props.authenticationReducer.teacherIds;
    if (arrayIds[id] === 'undefined') {
      return false;
    }
    return arrayIds[id];
  }
  searchText(e) {
    console.log(e);
  }

  render() {
    const teacherList = [
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
    const teacherDataList = this.props.authenticationReducer.teacherList;
    const teacherDataListArray = Object.values(teacherDataList);
    console.log(teacherDataListArray);
    return (
      <View>
          <SearchBar
            round
            lightTheme
            onChangeText={this.searchText.bind(this)}
            placeholder='Type Here...'
          />
          <View>
          {teacherDataListArray.map((teacherOne, key) => (
              <Text key={key}>{teacherOne.email}</Text>
              ))}
          </View>
        <ScrollView>
          <List containerStyle={{ marginBottom: 20 }}>
            {teacherList.map((teacher, key) => (
               <ListItem
                 roundAvatar
                 avatar={{ uri: teacher.avatar_url }}
                 key={key}
                 title={teacher.name}
                 switchButton
                 hideChevron
                 switched={this.checkStatus(teacher.id)}
                 onSwitch={this.onPressSelectTeacher.bind(this, teacher)}
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
  selectTeacherAction,
  getTeacherListAction
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTeachers);
