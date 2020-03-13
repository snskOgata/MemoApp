import React, { Component } from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(['Setting a timer']);
    this.state = {
      memoList: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).onSnapshot(snapshot => {
      if (this._isMounted) {
        const memoList = [];
        snapshot.forEach(doc => {
          memoList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ memoList });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList
          memoList={this.state.memoList}
          navigation={this.props.navigation}
        />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
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
