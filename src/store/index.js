import { configureStore } from "@reduxjs/toolkit"
import algorithmsReducer from "./slices/algorithms"

export default configureStore({
  reducer: {
    algorithms: algorithmsReducer
  },
})