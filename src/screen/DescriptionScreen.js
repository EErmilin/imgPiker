import React, { Component } from 'react';
import { ScrollView,View,Text,TouchableOpacity,TextInput, Image,Dimensions } from 'react-native';
import {home} from '../routes'
import styles from '../style'
import { connect } from 'react-redux'
import {addDescription} from '../actions'

var { width } = Dimensions.get('window');
var imgWidth = width;

class DescriptionScreen extends Component{
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
      <TouchableOpacity onPress={()=>{this.props.addDescription(this.state.text);navigation.navigate(home)}}style={styles.button}>
        <Text>\/</Text>
      </TouchableOpacity>
      </View>
   </View>
  
  )
}
}

const mapStateToProps = state => ({
  imgUrl:state.reducer.uri
})

export default  connect(mapStateToProps, {addDescription})(DescriptionScreen);
