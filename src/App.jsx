import data from "./data.json";
import { Header } from "./components/Header";
import { Playlists } from "./components/Playlists";
import { AlbumType } from "./components/AlbumType";

console.log("data", data);

export const App = () => {
  // a constant of the actual album data array and log for info
  let albumData = data.albums.items;
  console.log("albumData", albumData);

  // use set to get a list of album types without duplicates
  let albumTypes = new Set();
  data.albums.items.forEach((album) => {
    albumTypes.add(album.album_type);
  });
  // convert the set to array to use the map function below
  albumTypes = Array.from(albumTypes);
  console.log("set", albumTypes);

  return (
    <>
      <Playlists />
      <Header />
      {albumTypes.map((aType) => (<AlbumType key={aType} aType={aType} albumData={albumData}/>))}
    </>
  );
};
