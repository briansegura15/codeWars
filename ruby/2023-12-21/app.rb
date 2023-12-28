def capitalize(s)
    result = s.chars.map.with_index{|char, index| index.odd? ? char : char.upcase }.join
    [result, result.swapcase]
  end

#   alternate solution
def capitalize(s)
    first = s.chars.map.with_index{|letter, index| index%2==0 ? letter.upcase : letter }
    second = s.chars.map.with_index{|letter, index| index%2==0 ? letter : letter.upcase }
    [first.join, second.join]
  ends