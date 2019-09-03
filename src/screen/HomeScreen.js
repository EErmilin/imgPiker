import React, {Component} from 'react';
import {ScrollView,View,Text,TouchableOpacity,Image,Dimensions,PermissionsAndroid} from 'react-native';
import {photo} from '../routes'
import styles from '../style'
import { connect } from 'react-redux'

var { width } = Dimensions.get('window');
var imgWidth = width;

export async function request_storage_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
  } catch (err) {
    console.warn(err)
  }
}

class HomeScreen extends Component{

  async componentDidMount() {
    await request_storage_runtime_permission()
  }

  render(){
    const {navigation} = this.props
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      
      <View style={styles.body}>
      <ScrollView>
      {this.props.posts.map(post =>
      <Post key={post.id} {...post} />)}
       </ScrollView>
      </View>
      
      <View style={styles.footer}>
      <TouchableOpacity onPress={()=>navigation.navigate(photo)}style={styles.button}>
        <Text>+</Text>
      </TouchableOpacity>
      </View>
   </View>
  )
}
}

const Post = ({ text, img }) => (
  <View>
  <Image style={{width: imgWidth, height: 300,}} source={{ uri: img}} />
  <Text> {text}</Text>
   </View>
)

const mapStateToProps = state => ({
  posts:state.reducer.posts
})

export default connect(mapStateToProps,null)(HomeScreen);
