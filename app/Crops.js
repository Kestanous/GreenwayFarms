export default Crops = {
  penny: {
    value: 0.01,
    name: "Penny sprout",
    count: 0,
    cost: 0
  },
  nickle: {
    value: 0.05,
    name: "nickle sprout",
    count: 0,
    cost: 100
  },
  dime: {
    value: 0.10,
    name: "dime sprout",
    count: 0,
    cost: 1000
  }
}

export const getCanPayCrop = (crop, primaryValue) => {
  return (primaryValue - getCropCost(crop)) >= 0
}


export const getCropCost = (crop) => {
  return crop.cost * ( (crop.count || 0) * 2.5 + 1)
}
