export const ESS = {
  squares: [[1, 1], [1, 2], [2, 0], [2, 1]],
  color: "#41b883"
}
export const ZED = {
  squares: [[1, 1], [1, 0], [2, 2], [2, 1]],
  color: "#301a4b"
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
  color: "#2a4d14"
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
    ["i", [1, 2]], ["zed", [2, 2]], ["el", [3,4], 3], ["o", [2,6]], //["jay", [4,5], 3]
  ],
  [
    ["jay", [7, 6]], ["jay", [6, 7], 2], ["tee", [5,9], 3], ["el", [8,8]], ["tee", [7,4], 3]
  ],
  [
    ["i", [10, 2]], ["zed", [13, 2]]
  ]
]

export const TEXT_POSITIONS = [
  [[0.9, 1.2], [1.8, 2], [2.8, 2.6]],
  [[5.9, 4.2], [6.8, 4.2], [7.8, 7.6]],
  [[14,4], [14,4], [14, 7]]
]



