import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeInformation } from "../shared/api/spoonacular";


function RecipeDetail() {

    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

    const { id } = useParams();

    const [data, setData] = useState();

    async function fetchRecipe() {
        const result = await getRecipeInformation(id, API_KEY);

        setData(result);
    }

    useEffect(() => {
        fetchRecipe();
    }, [id])

    return (<>

        <div className="recipe-detail">

            <h1>{data?.title}</h1>

            <img src={data?.image} alt={data?.title} />

            <p>Ready in: {data?.readyInMinutes} minutes</p>
            <p>Servings: {data?.servings}</p>


            <div className="Ingredients-Instructions">

                <div className="Ingredients">

                <h2>Ingredients</h2>

                <ul>
                    {data?.extendedIngredients?.map(i => (
                        <li key={i.id}>{i.original}</li>
                    ))}
                </ul>

                </div>

                <div className="Instructions">

                <h2>Instructions</h2>

                <ol>
                    {data?.analyzedInstructions?.[0]?.steps?.map(step => (
                        <li key={step.number}>{step.step}</li>

                    ))}
                </ol>

                </div>

            </div>

            <br />

            <a href={data?.sourceUrl} target="_blank">
                View full recipe
            </a>

        </div>


    </>)
}

export default RecipeDetail