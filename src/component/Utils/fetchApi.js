const url= "https://api.unsplash.com/search/photos";

const ApiKey= "jztY_Y_PM8-OPi84YLlZE9diN0qyEhDpa5lYBxY8X0Q"

export default async function fetchApi(query='gatos'){

try { 
    const response = await fetch(`${url}/?query=${query}&per_page=24&client_id=${ApiKey}`)
    
    const res= await response.json();
    return res.results;
} catch (error) {
    console.log(error)
}

}


