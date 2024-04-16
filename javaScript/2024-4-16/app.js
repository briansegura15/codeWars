function removeUrlAnchor(url) {
  url = url.split("#");
  return url[0];
}

const removeUrlAnchor = url => {
  const path = url.replace(/\#.*/, "");
  return path;
};

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
