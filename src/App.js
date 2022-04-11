import { useState, useEffect } from 'react';
import './App.css';
import AnimeCard from './components/AnimeCard';
import Home from './components/Home';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {

  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime]= useState([])
  const [searchAnime, setSearchAnime] = useState("")

  const getTopAnime = async()=>{
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`)
    .then(res=> res.json())

    setTopAnime(temp.top.slice(0,10))
  }
  

  useEffect(()=>{
    getTopAnime()
    
  },[])

  const handleSearch=(e)=>{
    e.preventDefault()
    fetchAnime(searchAnime)

  }

  const fetchAnime = async(input)=>{
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}&order_by=title&sort=asc&limit=10`)
    .then(res=> res.json())

    setAnimeList(temp.results)
    console.log(temp.results)
  }
  
 

  return (
    <div className="App">
    <Navbar />
    <div className="content-wrap">
    
    <MainContent 
    searchAnime={searchAnime}
    setSearchAnime={setSearchAnime}
    animeList={animeList}
    handleSearch={handleSearch}
    topAnime={topAnime}
    />
  

  <Sidebar topAnime={topAnime}/>
    
    </div>
    </div>
  );
}

export default App;
