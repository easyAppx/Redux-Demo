import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: 'false',
  users: [],
  error: ''
}

//Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.data)
})

const userSlice = createSlice({   
  name: 'user',
  initialState,
  extraReducers: bulider => {
    bulider.addCase(fetchUsers.pending, state =>{
    state.loading = true
    })
    bulider.addCase(fetchUsers.fulfilled, (state, action) =>{
      state.loading = false
      state.users = action.payload
      state.error = ""
    })
    bulider.addCase(fetchUsers.rejected, (state, action) =>{
      state.loading = false
      state.users = ""
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer