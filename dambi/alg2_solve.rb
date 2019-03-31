#!/usr/bin/env ruby 

# l = [-2,1,-3,4,-1,2,1,-5,4]
# l = [-5, -1, -3, -5]
# l = [2, 4, -2, -3, 8]

exit if ARGV.size == 0
l = ARGV

sum = 0
min_max = l[0]
max = -1
l.each do |i| 
  min_max = i if min_max < i && i < 0
  if sum + i < 0
    sum = 0
  else
    max = sum + i if max < sum + i
    sum = sum + i
  end
end

sum = sum + min_max if sum == 0
sum = max if sum < max
p sum 
