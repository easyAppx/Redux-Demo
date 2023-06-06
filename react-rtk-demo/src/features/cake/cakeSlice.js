import {createSlice} from '@reduxjs/toolkit'
// import { ordered as iceCreamOrdered } from '../iceCream/iceCreamSlice'

const initialState = {
  numOfCakes: 100,  
}

const cakeSlice  = createSlice({
  name: 'cake',
  initialState,
  reducers:{
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action) =>{
      state.numOfCakes += action.payload
    },
  },
})  

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions