import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

//UI
import CropItem from './CropItem'

class CropListView extends Component {
  render() {
    return(
      <View style={Styles.main}>
        {Object.keys(this.props.crops).map( (key) => {
          let crop = this.props.crops[key];
          if (crop.count)
            return <CropItem key={key} crop={crop} cKey={key} />;
          else
            if (crop.cost < this.props.primaryValue)
              return <CropItem key={key} crop={crop} cKey={key} />;
            else return <View key={key} />
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
    crops: state.crops,
    primaryValue: state.primaryValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default CropList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropListView)
