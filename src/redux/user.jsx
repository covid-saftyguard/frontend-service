import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: { currentUser: null },
  reducers: {
    logIn: (state, action) => {
      state.currentUser = action.payload
    }
  }
})

export const {
  logIn
} = userSlice.actions

export default userSlice.reducer
