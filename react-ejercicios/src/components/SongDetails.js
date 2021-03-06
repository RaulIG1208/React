import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

function SongDetails({ search, lyric, bio }) {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error ||
      lyric.name === "AbortError" ||
      lyric.result.length === 0 ? (
        <Message
          msg={`Error: no existe la cancion "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={lyric.result.track} lyrics={lyric.result.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el interprete "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
}

export default SongDetails;
