import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'

import ResearchButton from './ResearchButton'

class ResearchItemView extends Component {
  render() {
    let {upgrade, uKey, count} = this.props
    return(
      <View style={ItemStyle.container}>
        <View style={ItemStyle.main}>
          <View style={ItemStyle.subContainer}>
            <View style={ItemStyle.leftContainer}>
              <Text style={ItemStyle.title}>{upgrade.title}</Text>
              <Text style={ItemStyle.message}>{upgrade.message}</Text>
            </View>
            <View>
              { (upgrade.count < upgrade.max) ?
                <ResearchButton upgrade={upgrade} uKey={uKey} />
              : <View></View>
              }
              <Text>{`${upgrade.count} / ${upgrade.max}`}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const COLORS = {
  background: '#ffe082',
  mainLighten: '#ffc107',
};

let ItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.mainLighten,
    borderRadius: 10,
    marginBottom: 5
  },
  leftContainer: {
    flex: 2,
  },
  left: {

  },
  leftText: {

  },
  main: {
    flex: 1,
    padding: 3
  },
  title: {
    fontSize: 20,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  message: {
    flex: 1,
    fontSize: 14,
  }
});

const mapStateToProps = (state, props) => {
  return {
    count: props.upgrade.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: () => { dispatch(tap()) },
    onLongPress: () => { dispatch(startPressToTap()) },
    onPressOut: () => { dispatch(stopPressToTap()) }
  }
}

export default ResearchItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResearchItemView)
