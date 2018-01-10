import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import firebase from 'firebase';
import { development } from '../../config/Firebase';
import { styles } from '../../styles/Style';

import {
  selectTeacherAction,
  getTeacherListAction
} from '../../actions/authenticationAction'; // action included

class SelectTeachers extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Select Teacher',
    headerRight: <Text style={styles.navigationRightText}>Done</Text>,
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center',
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
  checkImage() {
    return 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';
  }
  pageLoading() {
    if (this.props.authenticationReducer.loader) {
      return (
          <View style={styles.activityLoader}>
              <ActivityIndicator size="small" color="#01A4E0" />
          </View>
      );
    }
      return true;
  }
  render() {
    console.log(this.props.authenticationReducer);
    const teacherList = this.props.authenticationReducer.teacherList;
    const resTeacherList = Object.keys(teacherList).map(key => ({ key, value: teacherList[key] }));
    return (
      <View style={styles.contentaaa}>
        {this.pageLoading()}
        <ScrollView>
          <List containerStyle={{ marginBottom: 20 }}>
            {resTeacherList.map((teacher, key) => (
               <ListItem
                 roundAvatar
                 avatar={{ uri: this.checkImage() }}
                 key={key}
                 title={teacher.value.email}
                 switchButton
                 hideChevron
                 switched={this.checkStatus(teacher.key)}
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
