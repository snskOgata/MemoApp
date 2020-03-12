import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default class MemoDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/03/11</Text>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text>講座のアイデアです。</Text>
        </View>
        <CircleButton name="pencil" color="white" style={styles.editButton} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4
  },
  memoHeaderDate: {
    color: 'white',
    fontSize: 12
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    flex: 1
  },
  editButton: {
    top: 78
  }
});
