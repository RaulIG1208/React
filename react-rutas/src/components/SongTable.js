import SongTableRow from "./SongTableRow";

function SongTable({ mySongs, handleDeleteSong }) {
  return (
    <div>
      <h2>Mis canciones favoritas</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Cancion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin canciones Favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SongTable;
