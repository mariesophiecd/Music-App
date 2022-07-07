// import { combineReducers } from "redux";

const favArtistReducer = (state = [], action) => {
    switch(action.type){
        case 'add_fav_artist':
            let tempArr = [...state, action.payload]
            return state = tempArr; 
        
        case 'delete_fav_artist':
            let tempoArr = [...state]
            tempoArr.filter(track => action.payload !== track.key) 
            return state = tempoArr;
        
        default:
            return state
    }
}


export default favArtistReducer
