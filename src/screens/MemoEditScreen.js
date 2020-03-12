import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default class MemoEditScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput value="Hi" style={styles.memoEditInput} multiline />
        <CircleButton name="check" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16
  }
});
