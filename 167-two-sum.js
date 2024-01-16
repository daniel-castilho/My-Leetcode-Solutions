/**
 * Leetcode 167. Two Sum II - Input Array Is Sorted
 * Finds two numbers in the given array that add up to the target number.
 *
 * @param {Array} numbers - The array of numbers to search.
 * @param {number} target - The target number to find the sum of.
 * @return {undefined} This function does not return a value.
 */

const twoSum = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left, right]
    }
    if (sum > target) {
      right--
    } else {
      left++
    }
  }
}

twoSum([2, 7, 11, 15], 9)
// twoSum([2, 3, 4], 6)
// twoSum([-1, 0], -1)
