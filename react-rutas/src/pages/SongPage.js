import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

function SongPage({ mySongs }) {
  let { id } = useParams();
  let currentSong = mySongs[id];
  let { search, lyric, bio } = currentSong;
  console.log(mySongs, mySongs[id]);
  console.log(id);
  return <SongDetails search={search} lyric={lyric} bio={bio} />;
}

export default SongPage;
