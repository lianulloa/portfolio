import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  algorithms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(_ => ({
    id: _,
    title: "Product of array except self " + _,
    question: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running"
  })),
  totalAlgorithms: 0
}

export const AlgorithmSlice = createSlice({
  name: "algorithm",
  initialState,
  reducers: {
    setAlgoritms: (state, action) => {
      state.algorithms = action.payload
    },
    setTotalAlgorithms: (state, action) => {
      state.totalAlgorithms = action.payload
    },
  },
})

// like vuex getters, although I don't know if they execute always or only when 
// there is a change in its depencies
export const selectors = {
  algorithms: ({ algorithms }) => algorithms.algorithms,
  totalAlgorithms: ({ algorithms }) => algorithms.totalAlgorithms,
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const actions = {
  incrementAsync: amount => dispatch => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }
}

// Action creators are generated for each case reducer function
// I call them mutations because I plan to use them just for synchronous calls
export const mutations = AlgorithmSlice.actions

export default AlgorithmSlice.reducer