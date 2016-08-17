export const tick = () => {
  return {
    type: 'TICK'
  }
}

export const tap = () => {
  return {
    type: 'TAP'
  }
}

export const startPressToTap = () => {
  return {
    type: 'START_PRESS_TO_TAP'
  }
}

export const stopPressToTap = () => {
  return {
    type: 'STOP_PRESS_TO_TAP'
  }
}

export const addResearch = (key) => {
  return {
    type: 'ADD_RESEARCH',
    key
  }
}

export const changeTab = (name) => {
  return {
    type: 'CHANGE_TAB',
    name
  }
}

export const changeCrop = (name) => {
  return {
    type: 'CHANGE_CROP',
    name
  }
}
