import { Album } from "./Album/Album";
import { capitalizeFirstLetter } from "./helperFunctions";

export const AlbumType = ({ aType, albumData }) => {
  return (
    <>
      <h2>{capitalizeFirstLetter(aType)}</h2>
      <div className="albumList">
        {albumData.map((album) => {
          if (aType === album.album_type) {
            return <Album key={album.id} {...album} />;
          }
        })}
      </div>
    </>
  );
};

AlbumType.defaultProps = {
  aType: "No type",
  albumData: {
    name: "No name",
    album_type: "No type",
    artists: [
      {
        name: "No artist",
        external_urls: { spotify: "#" },
      },
    ],
    external_urls: { spotify: "#" },
    images: "No image",
    release_date: "0",
    total_tracks: "0",
  },
};
