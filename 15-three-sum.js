/**
 * Leetcode 15. Three Sum
 * Returns an array of arrays, each containing three elements from the input array that sum to zero.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - The array of arrays containing three elements that sum to zero.
 */
const threeSum = (nums) => {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b)

  // Initialize an empty array to store the result
  const result = []
  const n = nums.length

  // Iterate through the array
  for (let i = 0; i < n - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // Initialize two pointers, left and right
    let left = i + 1
    let right = n - 1

    // Move the pointers towards each other
    while (left < right) {
      // Calculate the sum of the current triplet
      const sum = nums[i] + nums[left] + nums[right]

      // If the sum is zero, add the triplet to the result
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        // Move the pointers towards each other
        left++
        right--
      }
      // If the sum is greater than zero, move the right pointer towards the left
      else if (sum > 0) {
        right--
      }
      // If the sum is less than zero, move the left pointer towards the right
      else {
        left++
      }
    }
  }

  // Return the result array
  return result
}

// threeSum([-1, 0, 1, 2, -1, -4])
// threeSum([0, 1, 1])
// threeSum([0, 0, 0])
