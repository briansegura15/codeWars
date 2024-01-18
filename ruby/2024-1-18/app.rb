def countSheeps array
    # May the force be with you
    result = array.count { |ele| ele == true}
    return result
end

# alternative solution

def countSheeps array
    count = 0
      array.each do |ele|
        if ele == true
          count += 1
        end
      end
    return count
end