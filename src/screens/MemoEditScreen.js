import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

export default class MemoEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      key: ''
    };
  }

  componentDidMount() {
    const { params } = this.props.route;
    this.setState({
      body: params.body,
      key: params.key
    });
  }

  hundlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = firebase.firestore.Timestamp.now();
    db.collection(`users/${currentUser.uid}/memos`)
      .doc(this.state.key)
      .update({
        body: this.state.body,
        createdAt: newDate
      })
      .then(() => {
        this.props.route.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdAt: newDate
        });
        this.props.navigation.goBack();
      })
      .catch(() => {});
  };

  render() {
    const { body } = this.state;

    if (body === undefined) {
      return null;
    }

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={40}
      >
        <TextInput
          value={this.state.body}
          style={styles.memoEditInput}
          multiline
          onChangeText={text => {
            this.setState({ body: text });
          }}
          textAlignVertical="top"
        />
        <CircleButton name="check" onPress={this.hundlePress.bind(this)} />
      </KeyboardAvoidingView>
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
