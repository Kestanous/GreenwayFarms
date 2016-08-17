import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import GreenwayFarmsReducer from './reducers'

//UI
import App from './components/App'

let store = createStore(GreenwayFarmsReducer)

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

export default class GreenwayFarms extends Component {
  calculateTotalTick(upgrades) {
    return this.state.cropValue
      * (1 + Upgrades.fertilizers.value * (upgrades.fertilizers || 0))
      * (1 + Upgrades.advancedTools.value * (upgrades.advancedTools || 0))
  }

  upgrade (upgrade, key, disabled) {
    if (disabled) return
    let upgrades = this.state.upgrades, primaryValue = this.state.primaryValue - this.getCost(key), tickValue;
    upgrades[key] = upgrades[key] + 1 || 1;
    tickValue = this.calculateTotalTick(upgrades);
    this.setState({upgrades, primaryValue, tickValue});
  }

  getCost(key) {
    return Upgrades[key].cost * ( this.state.upgrades[key] || 0 * Upgrades[key].costScail + 1)
  }

  canPay(cost) {
    return this.state.primaryValue >= cost;
  }

  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
};
