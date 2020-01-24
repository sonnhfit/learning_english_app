import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Image,
    Text, 
    ScrollView,
    StyleSheet,
    SafeAreaView,
    ImageBackground, Dimensions
 } from 'react-native';

 var Device_Width = Dimensions.get('window').width ;

class HomeScreen extends PureComponent {
  render() {
    return (

      <SafeAreaView >
 
        <ScrollView>
          <View style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 20,
          }}>
            <Text style={{
              fontSize: 50, 
              flex: 6,
              paddingHorizontal: 20,
              justifyContent: "center",
              fontWeight: "700",
              }}>Today</Text>
            <Text style={{
              fontSize: 25, flex: 2, justifyContent: "center",
              paddingTop: 20, fontWeight: "400"
              }}>1 BV </Text>
          </View>
          <View style={{ marginTop: 100}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={{flex:1, flexDirection:'column', width: Device_Width-50,
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
             
                  <View style={{backgroundColor: "#FFF", height: 150, 
                  borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 20}}>
                    <Text>Header</Text>
                  </View>
                  <View style={{backgroundColor: "#456", height: 350,
                  borderBottomLeftRadius: 40, borderBottomRightRadius: 40
                }}>
                  <Text style={{ color: "#FFF",
                  fontWeight: "700", fontSize: 30,
                  paddingHorizontal: 20,
                  paddingTop: 20
                }}>Bảo hiểm cơ bản</Text>
                  <Text style={{ color: "#FFF",
                  paddingHorizontal: 20,
                  marginTop: 10
                }}>Khoá học cung cấp kiến thức cơ bản về bảo hiểm, và thi chứng chỉ hành nghề bán bảo hiếm</Text>

                <View style={{borderTopWidth: 0.5, padding: 10, paddingHorizontal:40, marginTop: 150, borderTopColor: "#FFF"}}>
                  <Text style={{color: "#FFF", fontSize: 24, fontWeight: "600"}}>Học tiếp</Text>
                </View>
                <View style={{borderTopWidth: 0.5, padding: 10,paddingHorizontal:40, borderTopColor: "#FFF"}}>
                  <Text style={{color: "#FFF", fontSize: 24, fontWeight: "600"}}>Kiểm tra</Text>
                </View>
              </View>
           
            </View>
            <View style={{flex:1, flexDirection:'row', width: Device_Width-20}}>
              <View style={{flex: 1, flexDirection: "column"}}>
                  <View style={{backgroundColor: "#444", height: 200}}>
                    <Text>Header</Text>
                  </View>
                  <View style={{backgroundColor: "#443", height: 300}}>
                  </View>
              </View>
           
            </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;