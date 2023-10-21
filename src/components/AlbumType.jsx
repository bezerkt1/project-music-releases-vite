import { Album } from "./Album/Album";
import { capitalizeFirstLetter } from "./helperFunctions";

export const AlbumType = ({aType, albumData}) => {
  return (
    <>
      <h2>{capitalizeFirstLetter(aType)}</h2>
      <div className="albumList">
        {albumData.map((album) => {
          if (aType === album.album_type) {
            return <Album key={album.id} {...album} />
          }
        })}
      </div>
    </>
  );
};