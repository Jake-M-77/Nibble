import { useState } from "react";
import { cuisines } from "../../shared/constants/cuisines";
import { diets } from "../../shared/constants/diets";
import { getCuisine, getDiet, getQuery } from "../../shared/api/spoonacular";


function SearchBar() {

    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;



    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useState('Unselected')
    const [cuisine, setCuisine] = useState('Unselected');
    const [diet, setDiet] = useState('Unselected');
    const [query, setQuery] = useState('Unselected');

    const [cuisineForm, setCuisineForm] = useState(false)
    const [queryForm, setQueryForm] = useState(false)
    const [dietForm, SetDietForm] = useState(false)

    async function searchAPI() {

        if(cuisineForm == true){
            setData(await getCuisine(cuisine, API_KEY))
        }
        else if(dietForm == true){
            setData(await getDiet(diet, API_KEY))
        }
        else if(queryForm == true){
            setData(await getQuery(query, API_KEY))
        }

    }

    function selectSearchParam(e) {
        setCuisineForm(false);
        setQueryForm(false);
        SetDietForm(false);


        if (e === "Unselected") {
            console.log("Awaiting input")
            console.log(API_KEY)
        }
        else if (e === "Cuisine") {
            setCuisineForm(true)
        }
        else if(e === "Diet"){
            SetDietForm(true)
        }
        else if(e === "Query"){
            setQueryForm(true)
        }
    }


    return (<>

        <p>Cuisine: {cuisine}</p>


        <label>
            SearchParam:
            <select name="selectedParams" defaultValue="Unselected" onChange={e => selectSearchParam(e.target.value)}>
                <option value="Unselected">Unselected</option>
                <option value="Cuisine">Cuisine</option>
                <option value="Query">Query</option>
                <option value="Diet">Diet</option>
                <option value="Empty">Empty</option>
            </select>
        </label>

        <br />

        {cuisineForm &&
            <label>Cuisine Search:
                <select name="selectedCuisine" defaultValue="Unselected" onChange={e => setCuisine(e.target.value)}>
                    <option value="Unselected">Unselected</option>
                    {cuisines.map(cuisine =>
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                    )}
                </select>
            </label>
        }

        {dietForm &&
            <label>Diet Search:
                <select name="selectedDiet" defaultValue="Unselected" onChange={e => setDiet(e.target.value)}>
                    <option value="Unselected">Unselected</option>
                    {diets.map(diet =>
                        <option key={diet} value={diet}>{diet}</option>
                    )}
                </select>
            </label>
        }

        {queryForm &&
            <label>Query Search:
                <input onChange={e => setQuery(e.target.value)}/>
            </label>
        }

        <br />

        {cuisineForm && cuisine != "Unselected" ? <button onClick={searchAPI}>Search Cuisine</button> : false}
        {dietForm && diet != "Unselected" ? <button onClick={searchAPI}>Search Diet</button> : false}
        {queryForm && query != "Unselected" ? <button onClick={searchAPI}>Search Query</button> : false}
        




        {data?.results?.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
            </div>
        ))}

    </>)


}

export default SearchBar