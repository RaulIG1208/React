import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

function SongSearch() {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { artist, song } = search;
      //Key para poder solicitar los datos a la api Happi
      let apiKey = "084b3a9iMVoYJVZj2zPAYO1n20g7kiIbYqmGxoiOXQaJwpOexMleRZyy";

      //URL de la API solo solicito datos del cantante
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //URL de la api para buscar la cacion y despues acceder a la lyrics

      let songUrl =
        `https://api.happi.dev/v1/music?q=${song}%20${artist}&limit=50&apikey=${apiKey}&type=track&lyrics=1`.replace(
          " ",
          "%20"
        );

      //console.log(artistUrl, songUrl);

      setLoading(true);

      //Realizo las dos peticiones para obtener los datos del artista y los datos de la cacion
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //Comparo con cada elemento de la respuesta cual es la cacion buscada y obtengo la ruta para la lirica
      console.log(songRes);
      let songUrlLyric;
      let songResLyric = {};

      if (songRes.result.length === 0) {
        songResLyric = songRes;
      } else {
        let { api_lyrics } = songRes.result.find((el) => {
          return el.track.toLowerCase() === song.toLowerCase();
        });

        //URL de la Lyric
        songUrlLyric = `${api_lyrics}?apikey=${apiKey}`;
        songResLyric = await helpHttp().get(songUrlLyric);
      }
      //Hago la peticion fetfchc para la lyric

      // console.log(api_lyrics);
      // console.log(artistRes);
      // console.log(songRes);
      //console.log(songResLyric);

      setBio(artistRes);
      setLyric(songResLyric);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <h2>Buscador de Canciones</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
}

export default SongSearch;
