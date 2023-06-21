import {
  DeteilLinks,
  DeteilLinksList,
  DeteilLinksItem,
} from './FilmDeteilsLinks.styled';

const FilmDeteilsLinks = () => {
  return (
    <DeteilLinksList>
      <DeteilLinksItem>
        <DeteilLinks to="cast">cast</DeteilLinks>
      </DeteilLinksItem>
      <DeteilLinksItem>
        <DeteilLinks to="reviews">reviews</DeteilLinks>
      </DeteilLinksItem>
    </DeteilLinksList>
  );
};
export default FilmDeteilsLinks;
