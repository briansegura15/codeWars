def problem x
    #your code here
    if x.is_a? String
      return "Error"
    else
      return x * 50 + 6
    end
  end

#   alternate

def problem x
	x.is_a?(String) ? "Error" : x * 50 + 6
end

# alternate 2

def problem x
    if x.class ==="String"
      return "Error" 
    else
      return (x*50)+6
    end
    end