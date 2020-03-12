import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          name="plus"
          onPress={() => {
            this.props.navigation.navigate('MemoEdit');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6'
  }
});
