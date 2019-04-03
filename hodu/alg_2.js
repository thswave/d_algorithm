const greedyMax = (array) => 
  array.reduce((prev, current) => {
    return prev + current >= current ? prev + current : current
  })
