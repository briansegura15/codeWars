const groupAnagrams = function (strs) {
  const groups = [];

  // Function to check if two strings are anagrams
  function areAnagrams(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }

  // Iterate through each string in the array
  for (const str of strs) {
    let added = false;

    // Iterate through existing groups to check for anagrams
    for (let i = 0; i < groups.length; i++) {
      if (areAnagrams(groups[i][0], str)) {
        groups[i].push(str);
        added = true;
        break; // Anagram found, no need to continue searching
      }
    }

    // If no existing group is found, create a new group
    if (!added) {
      groups.push([str]);
    }
  }

  return groups;
};

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

// alternate solution with hashmap
var a = function (strs) {
  // Create an empty object to store groups of anagrams
  const anagramGroups = {};

  // Iterate through each string in the array
  for (let str of strs) {
    // Sort the characters of the string alphabetically
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is not in the hashmap, create a new entry
    if (!anagramGroups[sortedStr]) {
      anagramGroups[sortedStr] = [str];
    } else {
      // If the sorted string is already in the hashmap, add the string to its group
      anagramGroups[sortedStr].push(str);
    }
  }

  // Convert the values of the hashmap to an array and return the result
  return Object.values(anagramGroups);
};
