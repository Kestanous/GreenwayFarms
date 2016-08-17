import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'

export default class HeaderView extends Component {
  render() {
    return(
      <View style={Styles.header}>
        <Text> Money: {this.props.primaryValue.toFixed(2)}</Text>
      </View>
    )
  }
}

const COLORS = {
  background: '#ffe082',
  mainLighten: '#ffc107',
};

let Styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: COLORS.mainLighten
  }
})


const mapStateToProps = (state) => {
  return {
    primaryValue: state.primaryValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView)
