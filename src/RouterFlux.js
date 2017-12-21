import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import SignUpStep1 from './Components/Auth/SignUpStep1';
import SignUpStep2 from './Components/Auth/SignUpStep2';
import SignUpStep3 from './Components/Auth/SignUpStep3';
import SearchTeachers from './Components/Auth/SearchTeachers';
import LoginCmp from './Components/Auth/LoginCmp';
import DashboardCmp from './Components/Auth/DashboardCmp';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginCmp} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={DashboardCmp}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={SearchTeachers} title="Create Employee" />
        <Scene key="employeeEdit" component={SignUpStep3} title="Edit Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
