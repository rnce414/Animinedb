import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props) {
  return (
    <main>
        <div className='main-head'>
            <form className='search-box' onSubmit={props.handleSearch}>
                <input
                type="search"
                placeholder='Search an Anime'
                required 
                value={props.searchAnime}
                onChange={e=>props.setSearchAnime(e.target.value)}
                />
                
            </form>
           
        </div>
        <div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id}
                        topAnime={props.topAnime} />
				))}
			</div>
       
    </main>
  )
}

export default MainContent