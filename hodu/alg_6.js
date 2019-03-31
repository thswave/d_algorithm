const getLost = (array, N) => 
  array.reduce((prev, current, index) => prev^current^(index+1), N)
