import { combineReducers } from 'redux'
import Upgrades, {getCost} from '../Upgrades'
import Crops, {getCropCost} from '../Crops'
import update from 'react/lib/update'

const initialState = {
  primaryValue: 999,
  pressToTap: false,
  crops: Crops,
  upgrades: Upgrades,
  tabView: 'crops',
  currentCrop: 'penny',
  perTickValue: 0
}

export default GreenwayFarmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      let obj = {
        primaryValue: state.primaryValue + state.perTickValue
      }
      return  Object.assign({}, state, obj)
    case 'TAP':
      if (!state.crops[state.currentCrop]) return state
      newState = update(state, {
        [`crops.${state.currentCrop}`]: {
          $set: ++state.crops[state.currentCrop].count
        },
        primaryValue: {
          $set: state.primaryValue - getCropCost(state.crops[state.currentCrop])
        }
      })
      return update(newState,{
        perTickValue: {
          $set: calculateTickValue(newState)
        }
      })
    case 'START_PRESS_TO_TAP':
      return  Object.assign({}, state, { pressToTap: true })
    case 'STOP_PRESS_TO_TAP':
      return  Object.assign({}, state, { pressToTap: false })
    case 'CHANGE_TAB':
      return  update(state, { tabView: {$set: action.name} })
    case 'CHANGE_CROP':
      return  update(state, { currentCrop: {$set: action.name} })
    case 'ADD_RESEARCH':
      let newState = update(state, {
        primaryValue: {
          $set: state.primaryValue - getCost(state.upgrades[action.key])
        },
        upgrades: {
          [action.key]: {
            count: {
              $set: state.upgrades[action.key].count + 1
            }
          }
        }
      })
      return update(newState,{
        perTickValue: {
          $set: calculateTickValue(newState)
        }
      })
    default:
      return state
  }
}

function calculateTickValue (state) {
  let tick = 0
  Object.values(state.crops).map((crop) => {
    tick += crop.value * crop.count
  })
  return tick
}
