import React, { Component } from 'react';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default class MemoListScreen extends Component {
  render() {
    return (
      <>
        <MemoList />
        <CircleButton>+</CircleButton>
      </>
    );
  }
}
