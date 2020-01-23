import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Image,
    Text, 
    ScrollView,
    StyleSheet,
    SafeAreaView
 } from 'react-native';


class AccountHeader extends PureComponent {
    render() {
        return (
            <View style={{
                flex: 1, 
                flexDirection: "row", 
                justifyContent: "space-around",
                marginTop: 50
                }}>
                
              <View>
                <Image
                style={{width: 100, height: 100, borderRadius: 50, borderColor: "#ccc", borderWidth: 3}}
                source={require('../../asset/avatar.png')}
                />
              </View>
              <View style={{
                  flexBasis: 200,
                  paddingTop: 15
                  }}>
              <Text style={{fontSize: 22, fontWeight: "bold", color: "#0d0d3f"}}>Nguyen Son</Text> 
              <Text style={{paddingTop: 10, color: "#a6aeca"}}>sonnhfit@gmail.com</Text> 
              </View>
              <View style={{padding: 10, marginTop: 15}}>
              <Icon name={'photo'} size={25} />
              </View>
            </View>
            
        );
    }
}


class AccountPoint extends PureComponent {
    render() {
        return (
            <View style={{
                flex: 1, 
                flexDirection: "row", 
                justifyContent: "space-around",
                marginTop: 50
                }}>
                
              <View>
              <Text style={styles.textPoint}>55</Text>
              <Text>Integral</Text>
              </View>
              <View >
              <Text style={styles.textPoint}>36</Text>
              <Text>Voucher</Text>
              </View>
              <View>
              <Text style={styles.textPoint}>8</Text>
              <Text>Follower</Text>
              </View>
              <View>
              <Text style={{
                  paddingTop: 5, 
                  paddingBottom: 5, 
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 20,
                  backgroundColor: "#98b9e6", 
                  color: "#3566ff"
                  }}>Lv55</Text> 
              </View>
            </View>
            
        );
    }
}

class AccountItem extends PureComponent {
    render() {
        return (
            <View style={{
                flex: 1, 
                flexDirection: "row", 
                justifyContent: "space-around",
                marginTop: 50
                }}>
                
              
            </View>
            
        );
    }
}


class AccountScreen extends PureComponent {
  render() {
    return (
        <SafeAreaView>
        <ScrollView>
            <AccountHeader></AccountHeader>
            <AccountPoint></AccountPoint>
            <AccountItem></AccountItem>
        </ScrollView>
        </SafeAreaView>
    
    );
  }
}

const styles = StyleSheet.create({
    textPoint: {
        fontSize: 22,
        fontWeight: "bold", 
        color: "#0d0d3f"
    }
});
export default AccountScreen;