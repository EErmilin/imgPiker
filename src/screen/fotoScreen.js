import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions  } from 'react-native';
import {discription} from '../routes'
import styles from '../style'
import CameraRoll from "@react-native-community/cameraroll";
import {selectImg} from '../actions'
import { connect } from 'react-redux'

var { width } = Dimensions.get('window');
var imgWidth = width;


class fotoScreen extends Component{
  state={
    photos:[],
    selectedImg:'',
  }
  componentDidMount(){
    CameraRoll.getPhotos({
      first: 10,
      assetType: 'Photos',
    })
    .then(r => {
      this.setState({ photos: r.edges });
      this._selectImg(0);
    })
    .catch((err) => {
    });
    
  }

  _selectImg = (i) => {
     this.setState({selectedImg: this.state.photos[i].node.image.uri})
      };

  render(){
    const {navigation} = this.props
   
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <View style={styles.bodyfoto}>
      <Image style={{width: imgWidth, height: 300,}}
           source={{ uri: this.state.selectedImg }} />
       {this.state.photos.map((p, i) => {
       return (
        <TouchableOpacity onPress={() => this._selectImg(i)}>
         <Image
           key={i}
           style={{
             width: imgWidth/5,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
          </TouchableOpacity>
       );
     })}
      </View>
      <View style={styles.footer}>
      <TouchableOpacity onPress={()=>{navigation.navigate(discription);this.props.selectImg(this.state.selectedImg)}}style={styles.button}>
        <Text>></Text>
      </TouchableOpacity>
      </View>
   </View>
  )
}
}

export default  connect(null, {selectImg})(fotoScreen);
