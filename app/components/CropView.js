import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { tap } from '../actions'

import Header from './Header'

class _CropView extends Component {
  render() {
    return(
      <TouchableWithoutFeedback onPress={this.props.onTap} style={Styles.container}>
        <View style={Styles.mainView}>
          <Header />
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
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  mainView: {
    flex: 2
  }
});

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTap: () => { dispatch(tap()) }
  }
}

export default CropView = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CropView)
