const getMoviesBySearchTerm = async (search) =>{
    const res =await  fetch(`http://www.omdbapi.com/?t=${search}&apikey=`)
    return await res.json()
}

const getMovieDetailsById = async(id)=>{
    const res =await  fetch(`http://www.omdbapi.com/?i=${id}&apikey=`)
    return await res.json()
}