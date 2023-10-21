import "./playlist.css";

export const Playlist = ({
  name,
  external_urls,
  images,
  tracks
}) => {
  return (
    <div className="playlist">
      <a href={external_urls.spotify}>
        <img src={images[0].url} alt={name}/>
      </a>
      <div className="playlistInfo">
        <a className="playlistName" href={external_urls.spotify}>{name}</a>
        <p className="playlistTracks">Tracks: {tracks.total}</p>
      </div>
    </div>
  );
};