import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

  render() {
    const { memo } = this.state;
    if (memo === undefined) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{memo.body}</Text>
            <Text style={styles.memoHeaderDate}>
              {dateString(memo.createdAt)}
            </Text>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text>{memo.body}</Text>
        </View>
        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() => {
            this.props.navigation.navigate('MemoEdit', { memo });
          }}
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
  editButton: {
    top: 78
  }
});
