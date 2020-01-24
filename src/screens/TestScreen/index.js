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


class TestScreen extends PureComponent {
  render() {
    return (
        <SafeAreaView>
        <ScrollView>
            <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
                <View style={{
                    backgroundColor: "#456",
                    height: 100,
                    width: 100
                }}>
                
                </View> 
                <View style={{
                    backgroundColor: "#446",
                    height: 100,
                    width: 100
                }}>
                
                </View> 
                <View style={{
                    backgroundColor: "#426",
                    height: 100,
                    width: 100
                }}>
                
                </View> 
                <View style={{
                    backgroundColor: "#456",
                    height: 100,
                    width: 100
                }}>
                
                </View> 
                <View style={{
                    backgroundColor: "#426",
                    height: 100,
                    width: 100
                }}>
                
                </View> 

            </View> 
            
        </ScrollView>
        </SafeAreaView>
    
    );
  }
}

const styles = StyleSheet.create({
  shadowBox: {
    height: 160,
    borderRadius: 14, 
    top: -50 ,
    alignItems: "center", 
    marginLeft: 20, 
    marginRight: 20, 
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6.68,

    elevation: 8,
  }
});
export default TestScreen;