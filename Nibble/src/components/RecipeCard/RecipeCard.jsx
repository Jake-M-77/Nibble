import { Link } from "react-router-dom"


function RecipeCard({data}) {

    return (<>
    

    <div className="card-layout">
        {data?.map(recipe =>

            <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-link">

            <div key={recipe.id} className='recipe-card'>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
        </div>


        </Link>
        )}
    </div>

        
    </>)

}

export default RecipeCard