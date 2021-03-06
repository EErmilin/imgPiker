import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { description } from '../routes'
import styles from '../style'
import CameraRoll from "@react-native-community/cameraroll";
import { selectImg } from '../actions'
import { connect } from 'react-redux'
import Header from './components/Header';

var { width } = Dimensions.get('window');
var imgWidth = width;


class PhotoScreen extends Component {
  state = {
    photos: [],
    selectedImg: '',
  }
  componentDidMount() {
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
    this.setState({ selectedImg: this.state.photos[i].node.image.uri })
  };

  render() {
    const { navigation } = this.props

    return (

      <View style={styles.container}>
        <Header />

        <View style={styles.bodyfoto}>
          <Image style={{ width: imgWidth, height: 300, }}
            source={{ uri: this.state.selectedImg }} />
          {this.state.photos.map((p, i) => {
            return (
              <TouchableOpacity onPress={() => this._selectImg(i)}>
                <Image
                  key={i}
                  style={{
                    width: imgWidth / 5,
                    height: 100,
                  }}
                  source={{ uri: p.node.image.uri }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => { navigation.navigate(description); this.props.selectImg(this.state.selectedImg) }} style={styles.button}>
            <Text>></Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(null, { selectImg })(PhotoScreen);
