import { configureStore } from "@reduxjs/toolkit"
import algorithmsReducer from "./slices/algorithms"
import jobsReducer from "./slices/jobs"
import settingsReducer from "./slices/settings"
import tetrisScoresReducer from "./slices/tetris"

export default configureStore({
  reducer: {
    algorithms: algorithmsReducer,
    jobs: jobsReducer,
    settings: settingsReducer,
    tetrisScores: tetrisScoresReducer
  },
})