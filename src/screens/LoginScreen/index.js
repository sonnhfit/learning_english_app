import React, { PureComponent } from 'react';
import styles from './LoginScreen.style';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';


class LoginScreen extends PureComponent {
//   _navigation = () => {
//     this.props.navigation.navigate('SecondScreen');
//   }

//   _onSaga = () => {
//     this.props.login();
//   }

  componentDidMount() {
    // const param = {

    // }
    // APi.user.login(param)
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Instamobile</Text>
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Đăng nhập"
              />
             
            </View>
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
  }


    componentWillUnmount() {
    }

    onLoginPress() {

    }

}

export default LoginScreen;