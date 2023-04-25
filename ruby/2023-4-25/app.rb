def calculate_age(year_of_birth, current_year)
    age = current_year - year_of_birth 
    return "You are #{age} years old." if age > 1
    return "You are 1 year old." if age == 1
    return "You were born this very year!" if age == 0
    return "You will be born in 1 year." if age == -1
    return "You will be born in #{age.abs} years." if age < -1
  end

#   Alternate

def calculate_age(year_of_birth, current_year)
    years = current_year - year_of_birth
    case 
      when years == 1  then "You are 1 year old."
      when years > 0   then "You are #{years} years old."
      when years == 0  then "You were born this very year!"
      when years == -1 then "You will be born in 1 year."
      when years < 0   then "You will be born in #{-years} years."
    end
   end