import React, { Component } from 'react';
import { ScrollView,View,Text,TouchableOpacity,TextInput, Image,Dimensions } from 'react-native';
import {home} from '../routes'
import styles from '../style'
import { connect } from 'react-redux'
import {addDisc} from '../actions'

var { width } = Dimensions.get('window');
var imgWidth = width;

class discriptionScreen extends Component{
  state={
    text:''
  }
  render(){
    const {navigation} = this.props
  return (
    
    <View style={styles.container}>
     <ScrollView>
      <View style={styles.header}>
      </View> 
      <View style={styles.body}>
      <Image style={{width: imgWidth, height: 300,}}source={{ uri: this.props.imgUrl}} />
        <TextInput multiline={true}
        onChangeText={(text) => this.setState({text})}
        style={{ borderColor: 'gray', borderWidth: 1}}/>
      </View>
      </ScrollView>
      <View style={styles.footer}>
      <TouchableOpacity onPress={()=>{this.props.addDisc(this.state.text);navigation.navigate(home)}}style={styles.button}>
        <Text>\/</Text>
      </TouchableOpacity>
      </View>
   </View>
  
  )
}
}

const mapStateToProps = state => ({
  imgUrl:state.reduser.uri
})

export default  connect(mapStateToProps, {addDisc})(discriptionScreen);
