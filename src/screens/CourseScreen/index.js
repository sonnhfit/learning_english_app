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


class CourseItem extends PureComponent {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 40,
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
                <Image style={{
                    flex: 2,
                    width: 90, height: 90, borderRadius: 45
                }}
                source={require('../../asset/HealthCourse.png')} />
                <View style={{
                    flex: 5,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 22,
                        paddingLeft: 20,
                        color: "#282c5c"
                    }}>Bảo hiểm cơ bản</Text>
                    <Text
                        style={{
                            fontSize: 12,
                            paddingLeft: 20,
                            color: "#747a83"
                        }}
                    >Cung cấp kiến thức cơ bản về bảo hiểm</Text>
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: "center",
                    paddingLeft: 20,
                   
                }}>
                    <Text style={{ color: "red"}}>Miễn phí</Text>
                </View>
            </View>
        );
    }
}


class CourseScreen extends PureComponent {
  render() {
    return (
        <SafeAreaView>
        <ScrollView>
            <View style={{backgroundColor: "#456", height: 250}}></View>
           
            <View style={{position: "relative"}}>
                <View style={{height: 160, top: -50 ,alignItems: "center", marginLeft: 20, marginRight: 20, backgroundColor: "#fff"}}>
                    <Text>Xin caho</Text>
                </View>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
           </View>
        </ScrollView>
        </SafeAreaView>
    
    );
  }
}

const styles = StyleSheet.create({
  
});
export default CourseScreen;