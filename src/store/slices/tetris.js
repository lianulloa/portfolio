import { createSlice } from "@reduxjs/toolkit"
import TetrisScoreApi from "../../api/tetrisScores"

const initialState = {
  scores: []
}

const TetrisScoresSlice = createSlice({
  name: "tetrisScore",
  initialState,
  reducers: {
    setTetrisScores: (state, action) => {
      state.scores = action.payload
    }
  }
})

export const selectors = {
  scores: ({tetrisScores}) => tetrisScores.scores
}

export const mutations = TetrisScoresSlice.actions

export const actions = {
  getScores: () => dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await TetrisScoreApi.list({metadata: false})
        resolve(data)
        dispatch(mutations.setTetrisScores(data))
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default TetrisScoresSlice.reducer