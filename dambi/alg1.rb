#!/usr/bin/env ruby

input_str = gets
input = input_str.to_i
exit if input.to_i <= 0

def go(open_count, close_count, list, current)
  if open_count == 0 && close_count == 0
    list << current unless list.include? current
    return list
  end

  if open_count == 0 && close_count > 0
    go(0, close_count-1, list, current+")")
  elsif open_count > 0 && close_count > 0
    go(open_count-1, close_count, list, current+"(")
    go(open_count, close_count-1, list, current+")") if open_count < close_count
  else
    return list
  end
end

open_count = input - 1
close_count = input
list = []
current = "("

go(open_count, close_count, list, current)

p list