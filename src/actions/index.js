export const addFavArtist = (track) => {
    return{
        type: 'add_fav_artist',
        payload: track
    }
}

export const deleteFavArtist = (key) => {
    return{
        type: 'delete_fav_artist',
        payload: key
    }
}

