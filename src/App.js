import React from 'react';
import {Charts, About, Home} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import { ChartsProvider } from './context/ChartsContext';

const App = () => {

  return(
    <ChartsProvider>    
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/charts' element={<Charts />}  />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </ChartsProvider>
  )
}




// function App() {
//   const [artistNum, setArtistNum] = useState(1);
//   const [albumState, setAlbumState] = useState(false);
//   const [artists, setArtists] = useState('loading');
  
//   async function getArtists(num) {
//     const fetchAPI = `https://theaudiodb.com/api/v1/json/2/artist.php?i=11202${num}`  
//     const options = {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       mode: 'no-cors'
//     }

//     try{
//         const result = await fetch(fetchAPI, {options})
//         const data = await result.json();
//         console.log(data)
//         // setArtists({name: data.artists[0].strArtist})
//     }catch(err){
//       console.log(err)
//     }
//   }

//   useEffect(() => {
//     let num = 0;
//     const timer = setInterval(() => {
//       if(num === 9){
//         return
//       }
//       num++     
//       // console.log('hi') 
//       getArtists(num)
//     }, 2500)
//     return () => {
//       clearInterval(timer);
//     }
//   }, [])

//   return (
//     <main>
//       <h1>Music App</h1>
//       <Artist artistNum={artistNum} albumState={albumState} setAlbumState={setAlbumState} />
//       <ArtistBtn artistNum={artistNum} setArtistNum={setArtistNum} setAlbumState={setAlbumState} />      
//     </main>
//   );
// }




export default App;
