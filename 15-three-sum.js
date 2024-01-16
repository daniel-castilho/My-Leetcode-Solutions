/**
 * Leetcode 115. Three Sum
 * Returns an array of arrays, each containing three elements from the input array that sum to zero.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - The array of arrays containing three elements that sum to zero.
 */
const threeSum = (nums) => {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b)

  let left = 0
  let right = nums.length - 1
  let result = []

  while (left < right) {
    // Calculate the sum of the leftmost, the second leftmost, and the rightmost elements
    const sum = nums[left] + nums[left + 1] + nums[right]

    if (sum === 0) {
      // If the sum is zero, add the triplet to the result array
      result.push([nums[left], nums[left + 1], nums[right]])

      // Store the current values of left and right
      let lastLeftOccurrence = nums[left]
      let lastRightOccurrence = nums[right]

      // Move the left pointer to the next distinct element
      while (left < right && nums[left] === lastLeftOccurrence) {
        left++
      }

      // Move the right pointer to the next distinct element
      while (left < right && nums[right] === lastRightOccurrence) {
        right--
      }
    }
    if (sum > 0) {
      // If the sum is greater than zero, move the right pointer to the left
      right--
    } else {
      // If the sum is less than or equal to zero, move the left pointer to the right
      left++
    }
  }
  return result
}

// threeSum([-1, 0, 1, 2, -1, -4])
// threeSum([0, 1, 1])
// threeSum([0, 0, 0])
