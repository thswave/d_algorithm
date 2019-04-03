const targetSum = (array, target) => {
  const missing = {}
  array.find((integer, index) => {
    const pair = missing[integer];
    if (pair) {
      result = [pair, index];
      return true;
    }
    if (integer <= target) {
      missing[target - integer] = index
    }
  })
}