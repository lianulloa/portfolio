import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  backgroundRotation: "left", //"left", "right", "center-bottom"
  previousBackgroundRotation: null
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBackgroundRotation: (state, action) => {
      state.previousBackgroundRotation = state.backgroundRotation
      state.backgroundRotation = action.payload
    },
    rollbackBackgroundRotationOneStep: (state) => {
      if (state.previousBackgroundRotation) {
        state.backgroundRotation = state.previousBackgroundRotation
        state.previousBackgroundRotation = null
      }
    }
  }
})

export const selectors = {
  backgroundRotation: ({settings}) => settings.backgroundRotation
}

export const mutations = settingsSlice.actions

export default settingsSlice.reducer