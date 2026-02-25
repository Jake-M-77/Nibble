

function RecipeCard({recipe}) {

    return (<>

        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
        </div>

    </>)

}

export default RecipeCard