const evenFibonacciSum = N => {
  let prev = 0,
      current = 1,
      temp = 0,
      sum = 0

  while(current < N) {
    temp = current
    current += prev
    prev = temp
    current % 2 === 0 && (sum += current)
  }

  return sum
}
