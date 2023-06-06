const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/users/userSlice').fetchUsers

console.log('Intial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))

//console.log('Update state', store.getState())

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))

// unsubscribe()