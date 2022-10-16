import { createSlice } from "@reduxjs/toolkit"
import TetrisScoreApi from "../../api/tetrisScores"
import { searchForInsertionPosition } from "../../utils/helpers"

const initialState = {
  scores: []
}

const TetrisScoresSlice = createSlice({
  name: "tetrisScore",
  initialState,
  reducers: {
    setTetrisScores: (state, action) => {
      state.scores = action.payload
    },
    insertScore: (state, action) => {
      const index = searchForInsertionPosition(
        state.scores, action.payload, 0, state.scores.length
      )

      state.scores.splice(index, 0, action.payload)

      if (state.scores.length > 10) {
        state.scores.splice(10, state.scores.length - 10)
      }
    }
  }
})

export const selectors = {
  scores: ({tetrisScores}) => tetrisScores.scores.slice(0, 10)
}

export const mutations = TetrisScoresSlice.actions

export const actions = {
  getScores: () => dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await TetrisScoreApi.list({ metadata: false })
        const scores = data.map(score => score.value)
        resolve(data)
        dispatch(mutations.setTetrisScores(scores))
      } catch (error) {
        reject(error)
      }
    })
  },
  createScore: (value) => dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await TetrisScoreApi.create({ value })
        dispatch(mutations.insertScore(data.value))
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default TetrisScoresSlice.reducer