import React from 'react'

function Home({topAnime}) {

    const showMe= true
  return (
    <div>
        
    <div >
     {showMe? <h3 className='topAnime-text'>Top Airing Anime</h3>: <h3></h3>}

    {topAnime.map(anime=>(
        showMe ?
            <div key={anime.mal_id}>
            <a 
            className='anime-home'
            href={anime.url} 
            target="_blank"
            rel = "noreferrer" 
            >
            
            <img src= {anime.image_url} className="sidebar-img"/>
            {anime.title}
            </a>
           
            </div>
            : <h3></h3>
    ))}
    
         
    </div>
</div>
  )
}

export default Home