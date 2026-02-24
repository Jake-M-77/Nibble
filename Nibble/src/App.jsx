import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './features/search/SearchBar'

function App() {

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  return (
    <>
      <h1>Hello, World!</h1>

      <p>{API_KEY}</p>

      <SearchBar />
      

    </>
  )
}

export default App
