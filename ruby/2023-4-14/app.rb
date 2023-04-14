def remove_char(s)
    s.slice!(0)
    s.slice!(-1)
    return s
end

# alternative 

def remove_char(s)
    #your code here
    word = s.split('')
    word.pop
    word.shift  
    word.join
  end