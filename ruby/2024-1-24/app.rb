def find_multiples(integer, limit)

    result = []  
  
    for current_number in integer..limit
     
      if current_number % integer == 0
        result << current_number
      end
    end
  
    return result
  end

#   alternative solution

def multiples_array(number, max)
    result = []  # Initialize an empty array to store the multiples
  
    (number..max).each do |current_number|
      # Check if the current number is a multiple of the original number
      # If it is, add it to the result array
      result << current_number if current_number % number == 0
    end
  
    return result
  end