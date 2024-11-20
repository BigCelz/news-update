import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import NewsBoardComponent from './Components/NewsBoardComponent';


const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <NavbarComponent  setCategory={setCategory}/>
      <NewsBoardComponent category={category}/>
    </div>
  )
}

export default App