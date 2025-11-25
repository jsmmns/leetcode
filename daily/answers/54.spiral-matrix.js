/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // https://leetcode.com/problems/spiral-matrix/discuss/20570/Clean-Java-readable-human-friendly-code
  // brilliant!
  const res = [];
  if (matrix.length == 0) return res;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (true) {

  }

  return res;
};
