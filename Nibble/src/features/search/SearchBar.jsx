import { useRef, useState } from "react";
import { cuisines } from "../../shared/constants/cuisines";
import { diets } from "../../shared/constants/diets";
import { getCuisine, getDiet, getNextPageResults, getQuery } from "../../shared/api/spoonacular";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function SearchBar({ mode }) {

    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

    const offsetRef = useRef(0);


    const [data, setData] = useState(null);
    const [cuisine, setCuisine] = useState('Unselected');
    const [diet, setDiet] = useState('Unselected');
    const [query, setQuery] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function searchAPI() {

        setLoading(true);
        setError(null);

        try {

            if (mode === "cuisine" && cuisine !== 'Unselected') {
                setData(await getCuisine(cuisine, API_KEY))
            }
            else if (mode === "diet" && diet !== "Unselected") {
                setData(await getDiet(diet, API_KEY))
            }
            else if (mode === "query" && query.trim() !== "") {
                setData(await getQuery(query, API_KEY))
            }

        } catch (err) {
            setError("Something went wrong while fetching recipes.")
        }

        setLoading(false);



    }

    async function updatePage(page) {

        let term;

        if (mode === "cuisine") {
            term = cuisine;
        }
        else if (mode === "diet") {
            term = diet;
        }
        else if (mode === "query") {
            term = query;
        }


        if (page === "next") {
            offsetRef.current = offsetRef.current + 10;
            const result = await getNextPageResults(mode, term, API_KEY, offsetRef.current);
            setData(result);
        } else {
            if (offsetRef.current == 0) {
                console.log('you are on page 1')
            }
            else {
                offsetRef.current = offsetRef.current - 10;
                setData(await getNextPageResults(mode, term, API_KEY, offsetRef.current))
                console.log(`else:${offsetRef.current}`);
            }
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
                <input onChange={e => setQuery(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter")
                            searchAPI()
                    }} />
            </label>
        }

        <br />

        <button onClick={searchAPI} disabled={loading}>Search {mode}</button>

        <br />

        {loading && <p>Loading Recipes...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && data?.results?.length > 0 && (
            <div>
                <RecipeCard data={data?.results} />

                <div className="navigation-buttons">
                    <button onClick={() => updatePage("previous")} disabled={offsetRef.current === 0}>Previous</button>
                    <button onClick={() => updatePage("next")}>Next</button>
                    <p>Page: {offsetRef.current / 10 + 1}</p>
                </div>
            </div>


        )}

        {!loading && !error && data?.results?.length === 0 && (
            <p>No Recipe Data to display</p>
        )}




    </>)


}

export default SearchBar