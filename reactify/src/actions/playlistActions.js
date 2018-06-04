
export function nextSong() {
    return {
        type: "NEXT_SONG"
    };
}

export function previousSong() {
    return {
        type: "PREVIOUS_SONG"
    };
}

export function selectSong(index) {
    return {
        type: "SELECT_SONG",
        payload: index
    };
}

export function selectPlaylist(index) {
    return {
        type: "SELECT_PLAYLIST",
        payload: index
    };
}