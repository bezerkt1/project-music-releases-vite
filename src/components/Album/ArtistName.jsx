export const ArtistName = ({ artists }) => {
  // Extract artist names

  const artistNames = artists.map((artist) => {
    return { name: artist.name, url: artist.external_urls.spotify };
  });

  // Join the artist names with commas, and add an ampersand (&) before the last name
  const formattedArtistNames = artistNames.reduce((acc, curr, index) => {
    let link = <a href={curr.url}>{curr.name}</a>;
    if (index === 0) {
      return link;
    } else if (index === artistNames.length - 1) {
      return (
        <>
          {acc} & {link}
        </>
      );
    } else {
      return (
        <>
          {acc}, {link}
        </>
      );
    }
  }, "");

  return <div class="artist-name">{formattedArtistNames}</div>;
};
