import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../style'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={{color: '#fff', fontSize: 20}}>Локальный инстаграмм</Text>
      </View>
    )
  }
}

export default Header;
