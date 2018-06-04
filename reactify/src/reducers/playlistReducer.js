export default function reducer(state = {
    songIndex: 0,
    playlist: {
        name: "Library",
        songs: [
            {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
            {
                artist: "Marvin Gaye & Tammi Terrell",
                name: "Ain't no Mountain High Enough",
                fileName: "AintNoMountainHighEnough.mp3"
            },
        ]
    },
    playlists: [
        {
            name: "Library",
            songs: [
                {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
                {
                    artist: "Marvin Gaye & Tammi Terrell",
                    name: "Ain't no Mountain High Enough",
                    fileName: "AintNoMountainHighEnough.mp3"
                },
            ]
        },
        {
            name: "My Playlist",
            songs: [
                {artist: "Redbone", name: "Come and Get Your Love", fileName: "ComeAndGetYourLove.mp3"},
                {
                    artist: "Marvin Gaye & Tammi Terrell",
                    name: "Ain't no Mountain High Enough",
                    fileName: "AintNoMountainHighEnough.mp3"
                },
            ]
        }
    ]
}, action) {
    switch (action.type) {
        case "NEXT_SONG":
            return {...state, songIndex: state.songIndex < state.playlist.songs.length - 1 ? state.songIndex + 1 : 0};
        case "PREVIOUS_SONG":
            return {...state, songIndex: state.songIndex > 0 ? state.songIndex - 1 : state.playlist.songs.length - 1 };
        case "SELECT_SONG":
            return {...state, songIndex: action.payload};
        case "SELECT_PLAYLIST":
            return {...state, playlist: state.playlists[action.payload]};
        default:
            return state;
    }
}