import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux'

import ResearchList from '../research/ResearchList'
import CropList from '../crops/CropList'

class _TabsView extends Component {
  render() {
    let menu;
    switch (this.props.tabView) {
      case 'crops':
        menu = <CropList />
        break;
      case 'research':
        menu = <ResearchList />
        break;
      default:
        menu = <View />
    }
    return (
      <View style={Styles.menu}>
        <ScrollView style={Styles.scroll}>{menu}</ScrollView>
      </View>
    )
  }
}

const COLORS = {
  background: '#ffe082',
  mainLighten: '#ffc107',
};


let Styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: COLORS.mainLighten
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  footer: {
    backgroundColor: COLORS.background,
    flexDirection: 'row'
  }
});

const mapStateToProps = (state) => {
  return {
    tabView: state.tabView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default TabsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TabsView)
