export const ArtistName = ({artists}) => {
   // Extract artist names
 const artistNames = artists.map(artist => artist.name);

 // Join the artist names with commas, and add an ampersand (&) before the last name
 const formattedArtistNames = artistNames.reduce((acc, curr, index) => {
   if (index === 0) {
     return curr;
   } else if (index === artistNames.length - 1) {
     return acc + ` & ${curr}`;
   } else {
     return acc + `, ${curr}`;
   }
 }, '');

 return (
   <div class="artist-name">
     {formattedArtistNames}
   </div>
 );
};