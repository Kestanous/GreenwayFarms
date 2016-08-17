import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { changeCrop } from '../../actions'

class CropItemView extends Component {
  render() {
    let {crop, cKey, currentCrop, count} = this.props, container;
    if (cKey == currentCrop) container = ItemStyle.selectedView
    else container = ItemStyle.deselectedView
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress.bind(this, cKey)} style={container}>
        <View style={container}>
          <Text style={ItemStyle.title}>{crop.name}</Text>
          <Text style={ItemStyle.count}>{crop.count}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const COLORS = {
  background: '#ffe082',
  mainLighten: '#ffc107',
};

let ItemStyle = StyleSheet.create({
  selectedView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.mainLighten,
    borderRadius: 10,
    marginBottom: 5
  },
  deselectedView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    borderRadius: 10,
    marginBottom: 5
  },
  title: {
    fontSize: 20,
  },
  count: {
    flex: 1,
    textAlign: 'right'
  }
});

const mapStateToProps = (state, props) => {
  return {
    count: props.crop.count,
    currentCrop: state.currentCrop
  }
}

const mapDispatchToProps = (dispatch, a,b) => {
  return {
    onPress: (name) => { dispatch(changeCrop(name)) },
  }
}

export default CropItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropItemView)
