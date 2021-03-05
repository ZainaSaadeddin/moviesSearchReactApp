import React, {useState} from 'react'

function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting ...");
        const url = `https://api.themoviedb.org/3/search/movie?api_key=9797dd0619b077150562cef9f518f98c&language=en-US&query=${query}&page=1&include_adult=false`;

    try{

        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        console.log(data.results);

    }catch(err){
       console.log(err)

    }
}

   
return(
    <div>
    <form onSubmit={searchMovies}>
    <label htmlFor="query">Movie Name</label>
    <input type="text" name="query" placeholder="Enter movie name" value={query} onChange={(e)=> setQuery(e.target.value)}></input>
    <button type="submit">Search</button>
    </form>

   
    {
    movies.filter(movie=>movie.poster_path).map(movie=>(
     <div>
     <img  
     
     src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
     alt={movie.name + 'poster'}
     
     
     />

     <div>
     <h3>{movie.title}</h3>
     <p><small>RELEASE DATE: {movie.release_date}</small></p>
     <p><small>RATEING: {movie.vote_average}</small></p>
     <p>{movie.overview}</p>
     </div>
     
     </div>


    ))}

    
    </div>
)

}


export default SearchMovies