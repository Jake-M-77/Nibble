import './RecipeCard.css'

function RecipeCard({data}) {

    return (<>
    

    <div className="card-layout">
        {data?.map(recipe =>
            <div key={recipe.id} className='recipe-card'>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
        </div>
        )}
    </div>

        
    </>)

}

export default RecipeCard