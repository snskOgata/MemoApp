import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet(
  {
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c',
    headphone: '\uf025',
    microphone: '\uf130'
  },
  'FontAwesome'
);

export default class CircleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color, onPress } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }
    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress}>
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {this.state.fontLoaded ? (
            <CustomIcon
              name={name}
              style={[styles.circleButtonTitle, { color: textColor }]}
            />
          ) : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24
  }
});
