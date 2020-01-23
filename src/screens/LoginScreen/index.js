import React, { PureComponent } from 'react';
import styles from './LoginScreen.style';
import {
    Keyboard, 
    Text, 
    View,
    Image, 
    TextInput, 
    TouchableWithoutFeedback, 
    Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { color } from 'react-native-reanimated';


class LoginScreen extends PureComponent {
  _navigation = () => {
    this.props.navigation.navigate('HomeScreen');
  }

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
            <Text style={styles.logoText}>Learn Japanese</Text>
            <View style={{textAlign: "center", alignItems: "center"}}>
              <Image
              style={{width: 250, height: 250}}
              source={require('../../asset/Logo.png')}
              />
              </View>
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <Button
                buttonStyle={styles.loginButton}
                onPress={this._navigation}
                title="Đăng nhập"
              />
              
             <Text style={{ color: "#fff", textAlign: "center", marginTop: 10 }}><Text style={{fontWeight: 'bold', color: "#5df2d6"}}>Đăng ký </Text>Hoặc đăng nhập với</Text>

             <View style={{ alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 15
            }}>
             <Image
              style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../../asset/Facebook.png')}
              />
              <Image
              style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../../asset/google.png')}
              />
              <Image
              style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../../asset/twitter.png')}
              />
             </View>

            
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