import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <>
    
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer
        Greeting="Hola Profe!! :D"
        />  
      </div>
    </>
 
  )
}

export default App