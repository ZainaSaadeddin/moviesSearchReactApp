import React, {useState} from 'react'



function SecondSearchMovies(){

    const [query, setQuery] = useState('')
    const [movies, SetMovies] = useState([])

    const searchMoviesData = async (e) =>{
      e.preventDefault();
      
      const url = `https://api.themoviedb.org/3/search/movie?api_key=9797dd0619b077150562cef9f518f98c&language=en-US&query=${query}&page=1&include_adult=false`;
       
      try{
      const res = await fetch(url)
      const data = await res.json() 
      SetMovies(data.results)
      console.log(data.results)
      }catch(err){
      console.log(err)
      }
     
    }

    return(


        <div>
        <form onSubmit={searchMoviesData}>
         <label>Movie Name</label>
         <input value={query} onChange={(e)=> setQuery(e.target.value)}></input>
         <button type="submit">Search</button>
        </form>

      

        {
        movies.filter(movie => movie.poster_path).map(movie=> (
            
           <div> 
            <img 
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + 'poster'}
            />
        
            <div>
            <p>movie.title</p>
            <p>movie.vote_average</p>
            <p>movie.overview</p>
            </div>
            
          </div>
          
            
          ))
        }
        
    


        </div>
    )



}


export default SecondSearchMovies