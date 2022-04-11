import React from 'react'

function Sidebar({topAnime}) {
  return (
    <aside>
        
        <nav >
        <h3 className='topAnime-text'>Top Airing Anime</h3>

        {topAnime.map(anime=>(
                <div key={anime.mal_id}>
                <a 
                className='anime-sidebar-title'
                href={anime.url} 
                target="_blank"
                rel = "noreferrer" 
                >
                <img src= {anime.image_url} className="sidebar-img"/>
                {anime.title}
                </a>
               
                </div>
        ))}
        
           
            
        </nav>
    </aside>
  )
}

export default Sidebar