import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {cuisines} from './shared/constants/cuisines'
import { getData } from './shared/api/spoonacular'

function App() {

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  function handleSearchTermChange(e){
    setSearchTerm(e.target.value);
  }

  async function searchCuisine(){
    setData(await getData(searchTerm, API_KEY))
  }

  return (
    <>
      <h1>Hello, World!</h1>

      <p>{API_KEY}</p>

      <ul> List of supported cuisines
        {cuisines.map((cuisine) => 
          <li key={cuisine}>{cuisine}</li>
        )}
      </ul>

      {!data && <p>Loading...</p>}

      <p>searchdata: {searchTerm}</p>

        <label>Cuisine: </label>
        <input type='text' name='cuisine' value={searchTerm} onChange={handleSearchTermChange}/>
        <input type='submit' onClick={searchCuisine}/>



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
