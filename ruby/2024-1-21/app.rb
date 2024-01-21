def sum_two_smallest_numbers(numbers)
    #Your code here
    sorted_nums = numbers.sort
    sum = sorted_nums[0] + sorted_nums[1]
    return sum
  end

#   alternate solution

def sum_two_smallest_numbers a
    a.min(2).sum
  end