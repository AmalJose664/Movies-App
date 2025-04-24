import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./Row-post.css"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'


function RowPost(props) {
    
    const [movies, setMovies] = useState([]) 
    const [urlId ,setUrlId] = useState('')
    useEffect(()=>{
        
         axios.get(props.url).then((response) => {
        console.log(response.data.results[0],"=======================");
            
        setMovies(response.data.results)
        }).catch((e)=>{
        console.log("Error=======>>>>",e.message);
      
        })
    }, [props.url])
    const opts={
        height:'390',
        widht:'100%',
        playerVars:{
            autoPlay:0
        }
    };
  const handleMovie = (id)=>{
    console.log(id); 
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data); 
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        
        }else{
        
            console.log("Array empty");
        }
        
      }).catch((e)=>{
        console.log(e," ========= ",e.message);
        
      })
    
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
            
             { movies.map((object)=>
                 <img onClick={()=>{
                     handleMovie(object.id)
                 }} key={object.id} src={`${imageUrl + object.backdrop_path}`} alt="Movie Poster"
                     className={props.isSmall ? 'small-poster' : 'poster'} />
             )}
      </div>
          {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
