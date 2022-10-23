export const ESS = {
  squares: [[1, 1], [1, 2], [2, 0], [2, 1]],
  color: "#41b883"
}
export const ZED = {
  squares: [[1, 1], [1, 0], [2, 2], [2, 1]],
  color: "#00f1ff"
}
export const EL = {
  squares: [[1, 1], [1, 2], [1, 0], [0, 2]],
  color: "#e2c044"
}
export const JAY = {
  squares: [[1, 1], [1, 2], [1, 0], [0, 0]],
  color: "#f46036"
}
export const TEE= {
  squares: [[1, 1], [1, 2], [1, 0], [0, 1]],
  color: "#e75a7c"
}
export const I = {
  squares: [[1, 0], [1, 1], [1, 2], [1, 3]],
  color: "#a288e3"
}
export const O = {
  squares: [[1, 1], [1, 0], [0, 0], [0, 1]],
  color: "#f947ff"
}

export const BASE_TIMELINE = [
  ["i", [19, 1]],
  ["zed", [18, 4]],
  ["tee", [18, 6], 3],
  ["ess", [18, 9], 1],
  ["el", [18, 7], 1],
  ["jay", [18, 1]],
]

export const TIMELINE_GROUPS = [
  [
    ["i", [1, 2]], ["zed", [2, 2]], ["el", [3,4], 3], ["o", [2,6]], ["tee", [0, 8], 1]
  ],
  [
    ["jay", [7, 6]], ["jay", [6, 7], 2], ["ess", [5,9], 1], ["el", [8,8]], ["tee", [7,4], 3], ["o", [10,2]]
  ],
  [
    ["ess", [12, 4], 1], ["zed", [13, 3]], ["el", [11, 6]], ["o", [13, 6]], ["jay", [13, 7], 3], ["tee", [15, 5]], ["i", [13, 8], 1]
  ]
]

export const TEXT_POSITIONS = [
  [[0.9, 1.2], [1.8, 2], [2.8, 2.6]],
  [[5.9, 4.2], [6.8, 5.1], [7.8, 7.6]],
  [[12, 3.3], [12.9, 3.5], [13.8, 3.3]]
]



