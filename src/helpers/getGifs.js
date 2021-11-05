export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jsIdOg6rv95j7XE0W2JRBx3YXhaWgYEb&q=${encodeURI(category)}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map( img => {
        return {
            id: img.id, 
            title: img.title, 
            url: img.images?.downsized_medium.url
        }
    })
    // console.log({midata: gifs});
    return gifs;
}