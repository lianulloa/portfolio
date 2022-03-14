import { createSlice } from "@reduxjs/toolkit"
import JobsApi from "../../api/jobs"

const initialState = {
  jobs: [],
  totalJobs: 0
}

export const JobsSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload
    },
    setTotalJobs: (state, action) => {
      state.totalJobs = action.payload
    }
  }
})

export const selectors = {
  jobs: ({ jobs }) => jobs.jobs,
  totalJobs: ({ jobs }) => jobs.totalJobs
}

export const mutations = JobsSlice.actions

export const actions = {
  getJobs: query => dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await JobsApi.list(query)
        resolve(data)
        dispatch(mutations.setJobs(data.data))
        dispatch(mutations.setTotalJobs(data.metadta.total))
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default JobsSlice.reducer