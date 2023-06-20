function replace(s){
    //coding and coding....
    let vowels = ["a", "e", "i", "o", "u", 'A', 'E', 'I', 'O', 'U'];
    let replacedString = "";
    
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        replacedString += "!"
      } else {
        replacedString += s[i]
      }
    }
    return replacedString;
    