import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './features/search/SearchBar'
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


function App() {

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  return (
    <>

      <Navbar />
      <Outlet />


      
      

    </>
  )
}

export default App
