import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Image,
    Text, 
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Dimensions
 } from 'react-native';

var Device_Width = Dimensions.get('window').width ;

class ItemTest extends PureComponent {
    render() {
        return (
            <View style={{
                backgroundColor: "#FFF",
                padding: 10,
                borderRadius: 20,
                margin: 10,
                shadowColor: "#000",
                shadowOffset: {
                width: 0,
                height: 5,
                },
                shadowOpacity: 0.26,
                shadowRadius: 6.68,
                elevation: 8,
            }}>

            <View style={{
               
                height: 100,
                width: Device_Width/2 - 50,
               
            }}><Text>Oke</Text></View>
            </View> 
            
        );
    }
}
class TestScreen extends PureComponent {
  render() {
    return (
        <>
        <View style={{backgroundColor: "#456", 
            height: 150, borderBottomRightRadius: 20, borderBottomLeftRadius: 20,
            shadowColor: "#000",
                shadowOffset: {
                width: 0,
                height: 5,
                },
                shadowOpacity: 0.26,
                shadowRadius: 6.68,
                elevation: 8,
            }}>

            </View>
            <ScrollView>
        <SafeAreaView>
        
            
            <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
               <ItemTest></ItemTest>
               <ItemTest></ItemTest>
               <ItemTest></ItemTest>
               <ItemTest></ItemTest>
            </View> 
            
        
        </SafeAreaView>
        </ScrollView>
        </>
    );
  }
}

const styles = StyleSheet.create({
  shadowBox: {
    alignItems: "center", 
    marginLeft: 20, 
    marginRight: 20, 
    
  }
});
export default TestScreen;