import Styles from "./SearchPodcastCard.module.css";

import Image from "next/image";
import Link from "next/link";

const SearchPodcastCard = ({ podcast }) => {
  return (
    <Link className={Styles.link} href={`https://feymind.com/podcasts/${podcast.uri}`}>
      <Image
        src={podcast.imageUrl}
        alt="alt"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={Styles.CardImg}
      />
      <div className={Styles.contInfo}>
        <h3 className={Styles.title}>{podcast.title}</h3>
      </div>
    </Link>
  );
};

export default SearchPodcastCard;
