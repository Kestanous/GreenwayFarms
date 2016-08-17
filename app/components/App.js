import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { tick } from '../actions'

//UI
import CropView from './CropView'
import TabView from './tabs/TabsView';
import TabMenu from './tabs/TabsMenu';

class AppView extends Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      props.onTick()
    }, 100)
  }

  render() {
    return(
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <CropView />
        <TabView />
        <TabMenu />
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
  tabBarStyle: {
    backgroundColor: COLORS.background,
    borderColor: 'red',
    borderWidth: 4,
  },
  mainView: {
    flex: 2
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
    onTick: () => { dispatch(tick()) }
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView)
