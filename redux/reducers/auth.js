import {createSlice} from '@reduxjs/toolkit'
import { loginAction } from '../actions/auth'

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
    build.addCase(loginAction.fulfilled, (state, {payload}) => {
        state.token = payload
    })
    }
})

export const { logout, login } = authReducer.actions

export default authReducer.reducer