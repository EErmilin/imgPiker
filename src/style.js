import { StyleSheet, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');
var imgHeight = height;
var imgWidth = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  header: {
    backgroundColor: '#30d0fe',
    height: 60,
  },
 
  body: {
    height: 500,
  },
  bodyfoto: {
    height: 500,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  footer: {
    backgroundColor: '#30d0fe',
    height: 60,
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent:'center',
    alignItems:'center',
    left: 0
  },

  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:59,
    height:59,
    backgroundColor:'#fff',
    borderRadius:100,
   
  },
});

export default styles;
