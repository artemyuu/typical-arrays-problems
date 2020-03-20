exports.min = function min (array) {
  if(Array.isArray(array) == false || array.length == 0) return [];
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if(Array.isArray(array) == false || array.length == 0) return [];
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if(Array.isArray(array) == false || array.length == 0) return [];
  return array.reduce((sum, current) => sum + current,0) / array.length;
}
