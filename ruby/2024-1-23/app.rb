def is_lock_ness_monster(string)
    nessies_phrases = ["three fifty","tree fiddy","3.50"]
    
    if nessies_phrases.any? { |word| string.include?(word) }
      return true
    else
      return false
    end
  end

#   alternative solution

def is_lock_ness_monster(string)
    ["tree fiddy", "3.50", "three fifty"].any? { |t| string.include? t } 
  end