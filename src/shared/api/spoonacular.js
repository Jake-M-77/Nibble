export async function getCuisine(searchTerm, API_KEY) {
  try {
    const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${searchTerm}`,
      {
        headers: { 'x-api-key': API_KEY }
      })

    const json = await resp.json();
    console.log(searchTerm);
    console.log(json);
    return json;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getDiet(searchTerm, API_KEY) {
  try {
    const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${searchTerm}`,
      {
        headers: { 'x-api-key': API_KEY }
      })

    const json = await resp.json();
    console.log(searchTerm);
    console.log(json);
    return json;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getQuery(searchTerm, API_KEY) {
  try {
    const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}`,
      {
        headers: { 'x-api-key': API_KEY }
      })

    const json = await resp.json();
    console.log(searchTerm);
    console.log(json);
    return json;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getRecipeInformation(id, API_KEY) {
  try {
    const resp = await fetch(`https://api.spoonacular.com/recipes/${id}/information`,
      {
        headers: { 'x-api-key': API_KEY }
      })

    const json = await resp.json();
    console.log(json);
    return json;

  } catch (error) {
    console.error(error);
  }
}

export async function getNextPageResults(endpoint, searchTerm, API_KEY, offset) {
  try {
    const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${endpoint}=${searchTerm}&offset=${offset}&number=10`,
      {
        headers: { 'x-api-key': API_KEY }
      })

    const json = await resp.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
