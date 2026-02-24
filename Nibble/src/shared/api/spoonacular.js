export async function getCuisine(searchTerm, API_KEY){
    try {
      const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${searchTerm}`, 
        {
    headers: {'x-api-key': API_KEY}
        } )

        const json = await resp.json();
        console.log(searchTerm);
        console.log(json);
        return json;
    }
    catch(error)
    {
      return error;
    }
}

export async function getDiet(searchTerm, API_KEY){
    try {
      const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${searchTerm}`, 
        {
    headers: {'x-api-key': API_KEY}
        } )

        const json = await resp.json();
        console.log(searchTerm);
        console.log(json);
        return json;
    }
    catch(error)
    {
      return error;
    }
}

export async function getQuery(searchTerm, API_KEY){
    try {
      const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}`, 
        {
    headers: {'x-api-key': API_KEY}
        } )

        const json = await resp.json();
        console.log(searchTerm);
        console.log(json);
        return json;
    }
    catch(error)
    {
      return error;
    }
}