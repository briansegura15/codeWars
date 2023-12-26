def shortcut(s)
    # Remove vowels from the input string using delete
    s_without_vowels = s.delete("aeiou")
    return s_without_vowels
end

# alternate solution

def shortcut(s)
    #turn string into array of individual characters
     arr = s.chars
     #define array of vowels
     vowels = ["a","e","i","o","u"]
       #filter based on inclusion in vowels
     new_arr = arr.filter { |letter| !vowels.include?(letter) }
       #put it back together (concatenate)
     new_arr.join
end