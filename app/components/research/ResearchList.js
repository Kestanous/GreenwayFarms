import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

//UI
import ResearchItem from './ResearchItem'

class ResearchListView extends Component {
  render() {
    return(
      <View style={Styles.main}>
        {Object.keys(this.props.upgrades).map( (key) => {
          let upgrade = this.props.upgrades[key];
          return <ResearchItem key={key} upgrade={upgrade} uKey={key} />;
        })}
      </View>
    )
  }
}

let Styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5
  }
})

const mapStateToProps = (state) => {
  return {
    upgrades: state.upgrades
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default ResearchList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResearchListView)
