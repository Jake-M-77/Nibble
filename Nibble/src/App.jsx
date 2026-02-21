import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.spoonacular.com/recipes/complexSearch?cuisine=Latin American', 
        {
    headers: {'x-api-key': API_KEY}
        } )
    
      const json = await resp.json();
      setData(json);
    
    } catch (error) {
      console.log("broken lol")
    }
  }

  
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>Hello, World!</h1>

      <p>{API_KEY}</p>


      {data?.results?.map(recipe => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
      

    </>
  )
}

export default App
