import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            return initialState
        }
    },
    extraReducers: (build) => {
    }
})

export const { logout } = authReducer.actions

export default authReducer.reducer