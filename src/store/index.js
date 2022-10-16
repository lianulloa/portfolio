import { configureStore } from "@reduxjs/toolkit"
import algorithmsReducer from "./slices/algorithms"
import jobsReducer from "./slices/jobs"
import tetrisScoresReducer from "./slices/tetris"

export default configureStore({
  reducer: {
    algorithms: algorithmsReducer,
    jobs: jobsReducer,
    tetrisScores: tetrisScoresReducer
  },
})