import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'
import { addResearch } from '../../actions'
import {getIsDisabled, getCost} from '../../Upgrades'

class ResearchButtonView extends Component {
  render() {
    let {upgrade, uKey, cost} = this.props, disabledStyle, underlayColor = '#66ff66', onPress = () => {};
    if (this.props.disabled) {
      disabledStyle = Style.disabled;
      underlayColor = '#4d4d4d';
    } else {
      onPress = this.props.onPress
    }
    return(
      <TouchableHighlight underlayColor={underlayColor} onPress={() => { onPress(uKey) }} style={[Style.buttonHightlight, disabledStyle]}>
        <View style={Style.itemButton}>
          <Text> Research </Text>
          <Text> {cost.toFixed(2)} </Text>
        </View>
      </TouchableHighlight>
    )
  }
}
let Style = StyleSheet.create({
  buttonHightlight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#009D6E',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  itemButton: {

  },
  disabled: {
    backgroundColor: 'grey'
  }
});

const mapStateToProps = (state, props) => {
  return {
    disabled: getIsDisabled(props.upgrade, state.primaryValue),
    cost: getCost(props.upgrade)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: (key) => { dispatch(addResearch(key)) }
  }
}

export default ResearchButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResearchButtonView)
