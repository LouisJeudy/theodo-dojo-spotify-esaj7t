import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';
import { fetchTracks } from './lib/fetchTracks';

const AlbumCover = ({ track }) => {
  const src = track.album.images[0].url; // A changer ;)
  return <img src={src} style={{ width: 400, height: 400 }} />;
};

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(0);

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  const trackUrls = [
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];
  const [trackIndex, setTrackIndex] = useState(0);
  //let trackIndex = 0;

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  console.log(tracks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      {tracks && (
        <div className="App-images">
          <AlbumCover track={tracks[1]?.track} />
          <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
          <p>Il y a {tracks.length} titres.</p>
          <p>Il y a {tracks.length} titres.</p>
          <p>titre : {tracks[0]?.track.name}</p>
        </div>
      )}
      <audio src={trackUrls[trackIndex]} autoPlay controls />
      <button onClick={goToNextTrack}>Next track</button>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
