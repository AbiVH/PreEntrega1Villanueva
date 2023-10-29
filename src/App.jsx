import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <>
    {/* Se crea el NavBar */}
     
        <NavBar />
  
      {/* Se coloca el componente para el greeting */}
  
        <ItemListContainer
        Greeting="Hola Profe!! :D"
        />  
    
    </>
 
  )
}

export default App