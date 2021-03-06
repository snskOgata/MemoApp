import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  YellowBox
} from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state'
]);

const dateString = date => {
  if (date === undefined) return null;
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

export default class MemoList extends Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate('MemoDetail', {
            memo: item
          });
        }}
      >
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>
            {item.body ? item.body.substring(0, 10) : ''}
          </Text>
          <Text style={styles.memoDate}>{dateString(item.createdAt)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  }
});
