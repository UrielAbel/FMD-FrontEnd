import Styles from "./Card.module.css";

import Image from "next/image";
import Link from "next/link";

const Card = ({ uri, imageURL, title, autor }) => {
  return (
    <Link className={Styles.link} href={uri}>
      <Image
        src={imageURL}
        alt="alt"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={Styles.CardImg}
      />
      <div className={Styles.contInfo}>
        <h3 className={Styles.title}>{title}</h3>
        {/* {autor && <p className={Styles.autor}>por {autor}</p>} */}
      </div>
    </Link>
  );
};

export default Card;
