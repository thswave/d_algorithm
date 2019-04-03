const isIntPalindrome = (int, reversed = 0, origin = int) =>
  int > 0
    ? isIntPalindrome(Math.floor(int/10), (reversed * 10) + (int % 10), origin)
    : !(origin-reversed)
