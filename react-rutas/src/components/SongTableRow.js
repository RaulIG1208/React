import { useHistory } from "react-router-dom";

function SongTableRow({ el, id, handleDeleteSong }) {
  //console.log(el);

  let { bio, lyric } = el;
  let avatar = bio.artists[0].strArtistThumb;
  let avatarStyle = {
    width: "auto",
    height: "40px",
  };
  let history = useHistory();
  return (
    <tr>
      <td>
        <img style={avatarStyle} src={avatar} alt={bio.artists[0].strArtist} />
      </td>
      <td>
        <b>{bio.artists[0].strArtist}</b>
      </td>
      <td>
        <b>{lyric.result.track}</b>
      </td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default SongTableRow;
