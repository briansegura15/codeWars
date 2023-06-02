def remove_exclamation_marks(s)
    #your code here
    s = s.delete("!")
    s
  end

#   alternate solution

def remove_exclamation_marks(s)
  s.each_char do |c|
    if c == "!"
      s[c] = ""
    end
  end
  s
end