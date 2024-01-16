/**
 * Leetcode 48. Rotate Image
 * Rotate the given matrix in-place.
 * 
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {void}
 */

const rotate = (matrix) => {
  // Transpose the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  // Reverse each row of the transposed matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      ;[matrix[i][j], matrix[i][matrix.length - 1 - j]] = [
        matrix[i][matrix.length - 1 - j],
        matrix[i][j],
      ]
    }
  }
  console.log(matrix)
}

// rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
])
