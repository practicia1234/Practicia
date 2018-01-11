import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

//import firebase from 'firebase';
//import { development } from '../../config/Firebase';
import { styles } from '../../styles/Style';

import {
  selectTeacherAction,
  getTeacherListAction,
  saveSelectedTeachersWithStudentAction
} from '../../actions/authenticationAction'; // action included

class SelectTeachers extends Component {
  // Navigator information for this component
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Select Teacher',
      headerTitleStyle: {
        fontWeight: '600',
        fontSize: 15,
        paddingRight: 0,
        alignSelf: 'center',
      },
      headerRight: <Text
        style={styles.navigationRightText}
        onPress={() => params.handleTeacherSelection()}
      >
        Done
      </Text>
    };
  }

  componentWillMount() {
    // Firebase initialise
    //firebase.initializeApp(development);
    this.props.getTeacherListAction();
  }
  componentDidMount() {
    this.props.navigation.setParams(
      {
        handleTeacherSelection: this.teacherSelectionDone.bind(this)
      }
    );
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
  teacherSelectionDone() {
    const selectedTeachers = this.props.authenticationReducer.teacherIds;
    console.log(this.props.authenticationReducer);
    const payload = {
      userId: this.props.authenticationReducer.user.userInsertetId,
      selectedTeachers
    };
    // call saveSelectedTeachersWithStudent action
    this.props.saveSelectedTeachersWithStudentAction(payload);
  }

  render() {
    //console.log(this.props.authenticationReducer);
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
  getTeacherListAction,
  saveSelectedTeachersWithStudentAction
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTeachers);
