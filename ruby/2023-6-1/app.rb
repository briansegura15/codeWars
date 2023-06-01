def find_average(nums)
    # if array is emtpy return 0
    return 0 if nums.size == 0 
    # convert elements in array to integers
    numbers = nums.map(&:to_i) 

    sum = numbers.sum

    average = sum.to_f / numbers.length

    average
end

# alternate

def find_average(nums)
    return 0 if nums.size == 0
    nums.sum/nums.size.to_f
  end