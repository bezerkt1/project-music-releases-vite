export const AlbumName = ({ name, url }) => {
  return (
    <div class="album-name">
      <a href={url}>{name}</a>
    </div>
  );
};
