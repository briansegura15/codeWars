def digitize(n)
    #your code here
    array_of_digits = n.to_s.chars.map(&:to_i)
    reversed_array = array_of_digits.reverse
    return reversed_array
  end

#   alt solution
def digitize(n)
    n.to_s.split('').map(&:to_i).reverse
  end