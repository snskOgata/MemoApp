import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

export default class MemoCreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  hundlePress = () => {
    const { params } = this.props.route;
    console.log('uid: ', params.currentUser.user.uid);
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.user.uid}/memos`)
      .add({
        body: this.state.body,
        createdAt: new Date()
      })
      .then(docRef => {
        console.log(docRef);
        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.body}
          style={styles.memoEditInput}
          multiline
          onChangeText={text => {
            this.setState({ body: text });
          }}
        />
        <CircleButton name="check" onPress={this.hundlePress.bind(this)} />
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
