const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');


const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);

    useEffect(() => {
        const loadSongsFromServer = async () => {
            const response = await fetch('/getSongs');
            const data = await response.json();
            setSongs(data);
        };
        loadSongsFromServer();
    }, []);
    

    if (songs.length === 0) {
        return (
            <div>
                <h3>Loading Songs!</h3>
            </div>
        )
    }

    // [
    //     { artist: 'Rick Astley', title: 'Never Gonna Give You Up' },
    //     { artist: 'Washed Out', title: 'Feel It All Around' },
    // ]

    // [
    //     <div><h2>Rick Astley</h2> - <i>Never Gonna Give You Up</i></div>,
    //     <div><h2>Washed Out</h2> - <i>Feel It All Around</i></div>
    // ]

    const songList = songs.map(song => {
        return (
            <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        )
    });
    return (
        <div>
            <h1>Songs!</h1>
            {songList}
        </div>
    )
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />);
}
window.onload = init;