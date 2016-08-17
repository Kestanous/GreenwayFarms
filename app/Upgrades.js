export default Upgrades = {
  advancedTools: {
    cost: 1,
    costScail: 1.1,
    title: 'Advanced Tools',
    message: 'Increased harvist speed',
    value: 0.1,
    max: 50,
    count: 0
  },
  fertilizers: {
    cost: 1,
    costScail: 1.1,
    title: 'Improved fertilizers',
    message: 'Improves crop value by 25%',
    value: 0.25,
    max: 40,
    count: 0
  }
}

export const getIsDisabled = (upgrade, primaryValue) => {
  return !(getCanPay(upgrade, primaryValue) && upgrade.count <= upgrade.max)
}


export const getCanPay = (upgrade, primaryValue) => {
  return (primaryValue - getCost(upgrade)) >= 0
}


export const getCost = (upgrade) => {
  return upgrade.cost * ( (upgrade.count || 0) * upgrade.costScail + 1)
}
