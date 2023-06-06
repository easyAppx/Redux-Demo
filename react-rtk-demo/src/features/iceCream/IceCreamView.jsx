import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch  = useDispatch()

  // to allow user to make an input in restocking 
  const [input, setInput] = useState(1)

  return (
    <div>
      <h2>Number of IceCreams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>

      <input type='number' value={input} onChange={(e) => setInput(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(input))}>Restock IceCream</button>
    </div>
  )
}