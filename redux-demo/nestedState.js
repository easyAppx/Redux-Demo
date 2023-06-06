const redux = require('redux')
const produce = require('immer').produce
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const initialState = {
  name: 'Abbas',
  address: {
    street: '432 New Jerusalem St',
    city: 'Damaturu',
    state: 'Yobe',
  },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) =>{
  return {
    type: STREET_UPDATED,
    payload: street, 
  }
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case STREET_UPDATED:
      // return{
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // } Orrr

      return produce (state, (draft) =>{
        draft.address.street = action.payload
      })

    default: {
      return state
    }
  }
}


const store = redux.createStore(reducer, applyMiddleware(logger))
console.log('Intial State', store.getState())

const unsubscribe = store.subscribe(() => {})

//console.log('Update State', store.getState())

store.dispatch(updateStreet('456 New LaleInn Layout St'))

unsubscribe()
