import React, {useEffect, useContext} from 'react';
import { ChartsContext } from '../../context/ChartsContext';
import axios from 'axios';

export default function Charts() {
  const[charts, setCharts] = useContext(ChartsContext);
  const url = 'https://shazam.p.rapidapi.com/charts/list';
  
  function getCharts(){
    
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/track',
      // params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
      params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
      headers: {
        'X-RapidAPI-Key': '19b3a9ad00mshe478d2a9348acbap1dd87djsn4ef843f4d000',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };
    
    const result = axios.request(options).then(function (response) {
      setCharts(response.data.tracks)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    
    return result
  }

  // useEffect(() => {
  //   if(!charts){
  //     getCharts();
  //   }
  // }, []);

  return (
    <>
      <div>Charts</div>
      {charts ? (charts.map((track, index) => {
        return(
          <div key={index}>
            <h4>Title: {track.title}</h4>
            <h4>Artist's name: {track.subtitle}</h4>
            <img src={track.images.coverart} alt="Cover art"/>
          </div>
        )
      })) : 'loading'}
    </>  
  )
}

