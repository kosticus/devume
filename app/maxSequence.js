/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/*
One solution: Iterate through array and add all possible cominations of numbers.
Check against total. If current count is higher than total, update total.
*/
var maxSequence = function(array){
  // Start with either the first element in the array or 0
  var total = array[0] || 0

  // Iterate through array
  for (var i = 0; i < array.length; i++) {
    var current = array[i]
    // Create an inner count, starting at current element
    var innerCount = current
    // Check if inner count is higher than total. If so, update total
    if (innerCount > total) { total = innerCount }
    // Begin iterating adding numbers *after* current element to inner count
    for (var j = i+1; j < array.length; j++) {
      innerCount += array[j]
      // Keep checking if inner count is higher than total
      if (innerCount > total) { total = innerCount }
    }
  }

  // Finally, return total
  return total
}

/*
One solution: reduce
Set inner count outside reduce to save value
Iterate through array and find the larger of either: 0 or the current total plus the current number
Save the larger of either: inner (current) count or the running total
*/
var maxSequence = function(array) {
  var current = 0

  return array.reduce(function(total, number) {
    current = Math.max(current+number, 0)
    return Math.max(current, total)
  }, 0)

}
