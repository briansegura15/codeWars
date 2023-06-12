def array(string)
    if string.split(',').length <= 2
      return nil
    else
      return string.split(',')[1..-2].join(' ')
    end
  end