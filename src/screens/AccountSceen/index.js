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
                marginTop: 20
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
                
                }}>
                
                <View>
              <Text style={styles.textPoint, styles.myorder}>
              <Icon name={'redeem'} size={40} />
              </Text>
              <Text style={styles.myorderText, styles.colorTextSmall}>Integral</Text>
              </View>
              <View>
              <Text style={styles.textPoint, styles.myorder}>
              <Icon name={'monetization-on'} size={40} />
              </Text>
              <Text style={styles.myorderText, styles.colorTextSmall}>Integral</Text>
              </View>
              <View>
              <Text style={styles.textPoint, styles.myorder}>
              <Icon name={'card-membership'} size={40} />
              </Text>
              <Text style={styles.myorderText, styles.colorTextSmall}>Integral</Text>
              </View>
              <View>
              <Text style={styles.textPoint, styles.myorder}>
              <Icon name={'local-florist'} size={40} />
              </Text>
              <Text style={styles.myorderText, styles.colorTextSmall}>Integral</Text>
              </View>
            </View>
        );
    }
}

class ItemList extends PureComponent {
    render() {
        return (
                <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
                    <View  style={styles.listItem}>
                        <Image
                        style={styles.listItemImage}
                        source={require('../../asset/user.png')}
                        />
                        <Text style={styles.listItemText}>{this.props.name}</Text>
                        <Icon name="keyboard-arrow-right" style={styles.listItemArrow}></Icon>
                    </View>
                </View>
        );
    }
}


class AccountOptionList extends PureComponent {
    render() {
        return (
            <View style={{
                flex: 1, 
                flexDirection: "column",
                justifyContent: "space-around",
                marginTop: 40,
                }}>
                <ItemList name='My warranty'></ItemList>
                <ItemList name='Shipping address'></ItemList>
                <ItemList name='My post'></ItemList>
                <ItemList name='My money'></ItemList>
                <ItemList name='invite friends'></ItemList>
                <ItemList name='About us'></ItemList>
               
    
                
             
            </View>
        );
    }
}


class AccountScreen extends PureComponent {
  render() {
    return (
        <SafeAreaView style={{backgroundColor: "#fff"}}>
        <ScrollView >
            <AccountHeader></AccountHeader>
            <AccountPoint></AccountPoint>
            <View style={{
                    marginTop: 50,
                    flex: 1,
                    flexDirection: "row"
                }}>
                <Text style={{
                    flex: 2,
                    fontWeight: "bold",
                    marginLeft: 20,
                    marginBottom: 15
                    }}>My order</Text>
                <Text style={{
                    fontSize: 12,
                    flex: 6,
                    textAlign: "right",
                    paddingRight: 10,
                    color: "#a6aeca"
                    }}>more</Text>
            </View>
            <AccountItem></AccountItem>
            <AccountOptionList></AccountOptionList>
            <View style={{height: 150}}></View>
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
    },
    myorder: {
        paddingLeft: 10
    },
    myorderText: {
        paddingLeft: 5
    },
    colorTextSmall: {
        color: "#747a83"
    },
    listItemImage: {
        width: 20, height: 20
    },
    listItem: {
        flex: 1,
        flexDirection: "row",
        height: 40, 
        paddingTop: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 0.5
    },
    listItemText: {
        flex: 5, paddingLeft: 10, paddingTop: 2
    },
    listItemArrow: {
        flex: 1,
        paddingTop: 2, 
        textAlign: "right"
    }
});
export default AccountScreen;