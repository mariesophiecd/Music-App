import React from 'react';

export default function ArtistBtn({artistNum, setArtistNum, setAlbumState}) {
    
    function changeArtist(){
        console.log(artistNum)
        setAlbumState(false)
        if (artistNum == 2){
            setArtistNum(0)
        }else{
            setArtistNum(artistNum +1)
        }
    }
  
  return <button onClick={changeArtist}>See other artists</button>

}



