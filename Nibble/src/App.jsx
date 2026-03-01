import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './features/search/SearchBar'
import Navbar from './components/Navbar/Navbar';

function App() {

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  return (
    <>

      <Navbar />

      <p>{API_KEY}</p>

      <SearchBar />
      

    </>
  )
}

export default App
