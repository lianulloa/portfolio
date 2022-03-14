import { configureStore } from "@reduxjs/toolkit"
import algorithmsReducer from "./slices/algorithms"
import jobsReducer from "./slices/jobs"

export default configureStore({
  reducer: {
    algorithms: algorithmsReducer,
    jobs: jobsReducer
  },
})