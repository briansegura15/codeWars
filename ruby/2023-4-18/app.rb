def square_sum(numbers)
    numbers.map! {|num| num ** 2}
    return numbers.sum
  end

#   alternate

def squareSum(numbers)
    numbers.sum {|x| x * x}  
  end