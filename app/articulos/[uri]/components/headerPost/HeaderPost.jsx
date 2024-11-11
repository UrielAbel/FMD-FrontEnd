import Image from "next/image";
import Styles from "./HeaderPost.module.css";

const HeaderPost = ({ date, title, description, author, image }) => {
  return (
    <header className={Styles.header}>
      <Image
        src={image}
        alt="imageArticle"
        fill
        style={{ objectFit: "cover" }}
        className={Styles.headerImage}
      />
      <div className={Styles.gradient}></div>
      <div className={Styles.contInfo}>
        <p className={Styles.date}>{date}</p>
        <h1 className={Styles.title}>{title}</h1>
        <h3 className={Styles.description}>{description}</h3>
        <div className={Styles.author}>
          <div className={Styles.contAuthorInfo}>
            <p className={Styles.authorName}>{author.name}</p>
            <p className={Styles.authorBio}>{author.bio}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPost;
