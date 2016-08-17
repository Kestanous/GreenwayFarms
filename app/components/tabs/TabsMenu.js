import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import { changeTab } from '../../actions'


import MenuButton from './MenuButton';

class _TabsMenu extends Component {
  render() {
    return(
      <View style={Styles.footer}>
        <MenuButton text='Crops' onPress={this.props.onTab.bind(this, 'crops')} disabled={'crops' == this.props.tabView} />
        <MenuButton text='Research' onPress={this.props.onTab.bind(this, 'research')} disabled={'research' == this.props.tabView} />
      </View>
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
  menu: {
    flex: 1,
    backgroundColor: COLORS.mainLighten
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
  return {
    onTab: (name) => { dispatch(changeTab(name)) }
  }
}

export default TabsMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TabsMenu)
