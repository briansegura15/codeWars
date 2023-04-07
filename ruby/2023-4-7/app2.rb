def make_negative(num)
    #   Enter Code Here
       if num > 0 
        return num * -1
       else 
        return num * 1
       end
    end
    # Alternate solution

    def makeNegative(num)
        num > 0 ? -num : num
      end