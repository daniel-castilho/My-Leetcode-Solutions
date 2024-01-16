/**
 * Leetcode 167. Two Sum II - Input Array Is Sorted
 * Finds two numbers in the given array that add up to the target number.
 *
 * @param {Array} numbers - The array of numbers to search.
 * @param {number} target - The target number to find the sum of.
 * @return {undefined} This function does not return a value.
 */
const twoSum = (numbers, target) => {
  let left = 0; // Initialize left pointer
  let right = numbers.length - 1; // Initialize right pointer

  while (left < right) { // Iterate until left pointer becomes greater than or equal to right pointer
    let sum = numbers[left] + numbers[right]; // Calculate sum of numbers at left and right indices

    if (sum === target) { // If the sum is equal to the target value
      return [left, right]; // Return the indices of the two numbers
    }

    if (sum > target) { // If the sum is greater than the target value
      right--; // Move the right pointer one step to the left
    } else { // If the sum is less than the target value
      left++; // Move the left pointer one step to the right
    }
  }
}

twoSum([2, 7, 11, 15], 9)
// twoSum([2, 3, 4], 6)
// twoSum([-1, 0], -1)

