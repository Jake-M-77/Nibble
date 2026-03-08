import { useState } from "react";
import { cuisines } from "../../shared/constants/cuisines";
import { diets } from "../../shared/constants/diets";
import { getCuisine, getDiet, getQuery } from "../../shared/api/spoonacular";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function SearchBar({ mode }) {

    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;



    const [data, setData] = useState(null);
    const [cuisine, setCuisine] = useState('Unselected');
    const [diet, setDiet] = useState('Unselected');
    const [query, setQuery] = useState('');


    async function searchAPI() {

        if(mode === "cuisine" && cuisine !== 'Unselected'){
            setData(await getCuisine(cuisine, API_KEY))
        }
        else if(mode === "diet" && diet !== "Unselected"){
            setData(await getDiet(diet, API_KEY))
        }
        else if(mode === "query" && query.trim() !== ""){
            setData(await getQuery(query, API_KEY))
        }

    }

    


    return (<>

        <br />
    
        {mode === "cuisine" &&
            <label>Cuisine Search:
                <select name="selectedCuisine" defaultValue="Unselected" onChange={e => setCuisine(e.target.value)}>
                    <option value="Unselected">Unselected</option>
                    {cuisines.map(cuisine =>
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                    )}
                </select>
            </label>
        }

        {mode === "diet" &&
            <label>Diet Search:
                <select name="selectedDiet" defaultValue="Unselected" onChange={e => setDiet(e.target.value)}>
                    <option value="Unselected">Unselected</option>
                    {diets.map(diet =>
                        <option key={diet} value={diet}>{diet}</option>
                    )}
                </select>
            </label>
        }

        {mode === "query" &&
            <label>Query Search:
                <input onChange={e => setQuery(e.target.value)}/>
            </label>
        }

        <br />

        <button onClick={searchAPI}>Search {mode}</button>
        
        <br />

        {data && <RecipeCard data={data?.results}/> || <p>No Recipe Data to display</p>}


    </>)


}

export default SearchBar