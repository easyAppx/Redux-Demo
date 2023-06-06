import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IceCreamView } from './features/iceCream/IceCreamView'
import { UserView } from './features/users/UserView'

function App() {

  return (
    <div className='app'>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App
