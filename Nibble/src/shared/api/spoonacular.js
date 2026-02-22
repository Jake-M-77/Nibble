export async function getData(searchTerm, API_KEY){
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