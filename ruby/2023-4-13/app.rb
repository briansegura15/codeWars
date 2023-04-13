def positive_sum(arr)
    positive_numbers = arr.select { |n| n.positive? }
    sum = positive_numbers.reduce(0) { |total, n| total + n }
    return sum
  end 

#   alternate

def positive_sum(arr)
	sum = 0
  arr.each do |number|
  	if number > 0
    	sum += number
      end
  end
    sum
end