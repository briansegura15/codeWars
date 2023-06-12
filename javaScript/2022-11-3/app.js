const areaOrPerimeter = function (l, w) {
  // Return your answer

  if (l === w) {
    return l * w;
  } else {
    return (l + w) * 2;
  }
};

// alternate solution

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));
