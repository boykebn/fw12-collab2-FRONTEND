import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: null,
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, {payload}) => {
          state.token = payload.token
      },
      logout: (state, action) => {
          state.token = null
      }
    },
    extraReducers: (build) => {
    }
})

export const { logout, login } = authReducer.actions

export default authReducer.reducer