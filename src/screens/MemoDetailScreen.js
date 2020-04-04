import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Speech from 'expo-speech';

import CircleButton from '../elements/CircleButton';

const dateString = date => {
  if (date === undefined) return null;
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

export default class MemoDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.route;
    this.setState({
      memo: params.memo
    });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  handlePressSpeech = () => {
    Speech.speak(this.props.route.params.memo.body, {
      voice: 'com.apple.ttsbundle.Karen-compact',
      rate: 1.3,
      pitch: 1.0
    });
  };

  render() {
    const { memo } = this.state;
    if (memo === undefined || memo.body === undefined) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>
              {memo.body.substring(0, 10)}
            </Text>
            <Text style={styles.memoHeaderDate}>
              {dateString(memo.createdAt)}
            </Text>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text style={styles.memoContentText}>{memo.body}</Text>
        </View>
        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => {
            this.props.navigation.navigate('MemoEdit', {
              ...memo,
              returnMemo: this.returnMemo.bind(this)
            });
          }}
        />

        <CircleButton
          name="headphone"
          onPress={this.handlePressSpeech.bind(this)}
        />
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
  memoContentText: {
    lineHeight: 22,
    fontSize: 16
  },

  editButton: {
    top: 78
  }
});
