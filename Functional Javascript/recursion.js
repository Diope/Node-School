function shrink(arr, fn, initial) {   
  if (!arr.length) {return initial};  // Base case   
  initial = fn(initial, arr[0]);                      
  return shrink(arr.slice(1), fn, initial);
}

module.exports = shrink