import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';

export default class MenuButton extends Component {
  render() {
    let style, onPress;
    if (this.props.disabled) {
      style = [Styles.containerDisabled, this.props.styleDisabled]
    } else {
      onPress = this.props.onPress
      style = [Styles.container, this.props.style]
    }
    return(
      <TouchableWithoutFeedback onPress={onPress} style={Styles.button}>
        <View style={style}>
          <Text style={Styles.text}> {this.props.text} </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const COLORS = {
  background: '#ffe082',
  mainLighten: '#ffc107',
};


let Styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 5
  },
  containerDisabled: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems:'center',
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.mainLighten,
    borderColor: COLORS.background,
    borderWidth: 1,
    alignItems:'center',
    height: 30
  },
  text: {
  }
});
