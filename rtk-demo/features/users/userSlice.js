const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
  loading: 'false',
  users: [],
  error: ''
}

//Generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users475')
  .then((response) => response.data.map((user) => user.id))
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

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers