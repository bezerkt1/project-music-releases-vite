import data from "../stretched-goal.json";
import { Playlist } from "./Playlist/Playlist";

console.log("Playlist data", data);
const playlistData = data.playlists.items;

const openPlaylists = () => {
  document.getElementById("playlists").style.width = "400px";
  document.getElementById("playlists").style.width = "400px";
}

const closePlaylists = () => {
  document.getElementById("playlists").style.width = "0";
}

export const Playlists = () => {
  return (
    <>
      <button className="btnPlaylists" onClick={openPlaylists} id="playlistsOpen">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div id="playlists">
        <button className="btnPlaylists" onClick={closePlaylists} id="playlistsClose">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <h2>Playlists</h2>
        <div className="playlistList">
          {playlistData.map((playlist) => (<Playlist key={playlist.id} {...playlist} />))}
        </div>
      </div>
    </>
  );
};