import React from "react";
import { useState, useEffect } from 'react'
import Card from './Card'
import InputText from './InputText'
import SubmitBtn from "./SubmitBtn";


function App() {

  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [artistError, setArtistError] = useState('');
  const [songError, setSongError] = useState('');
  const [hasError, setHasError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleArtistChange(event) {
    const value = event.target.value.trim();
    setArtist(value);

    if (value.length < 3 || value.startsWith(' ')) {
      setArtistError('Por favor chequea que la información sea correcta');
    } else {
      setArtistError('');
    }
  }

  function handleSongChange(event) {
    const value = event.target.value.trim();
    setSong(value);

    if (value.length < 6) {
      setSongError('Por favor chequea que la información sea correcta');
    } else {
      setSongError('');
    }
  }

function handleSubmit(event) {
  event.preventDefault();

  let artistError = '';
  let songError = '';

  if (artist.length < 3 || artist.startsWith(' ')) {
    artistError = 'Por favor chequea que la información sea correcta';
  }

  if (song.length < 6) {
    songError = 'Por favor chequea que la información sea correcta';
  }

  setArtistError(artistError);
  setSongError(songError);
  setHasError(artistError || songError);

  if (!artistError && !songError) {
    setFormSubmitted(true);
  }
}

useEffect(() => {
  setFormSubmitted(false);
}, [artist, song]);

  return (
    <div className="App">
      <h1>¿Cuál es tu canción favorita?</h1>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Artista"
          value={artist}
          onChange={handleArtistChange}
          placeholder="Ingresa el nombre del artista"
          error={hasError && artistError}
        />
        <InputText
          label="Canción"
          value={song}
          onChange={handleSongChange}
          placeholder="Ingresa el nombre de la canción"
          error={hasError && songError}
        />
        <SubmitBtn label="Submit" />
      </form>
      {formSubmitted && <Card artist={artist} song={song} />}
    </div>
  );
}

export default App;
