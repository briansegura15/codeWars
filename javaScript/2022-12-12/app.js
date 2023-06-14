const removeUrlAnchor = url => url.split("#")[0];

// alternate solution

function removeUrlAnchor(url) {
  let string = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      break;
    }
    string += url[i];
  }
  return string;
}
