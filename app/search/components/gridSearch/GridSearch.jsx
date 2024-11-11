import SearchPodcastCard from "../searchPodcastCard/SearchPodcastCard";
import Styles from "./GridSearch.module.css";

const GridSearch = ({ contenido, label }) => {
  return (
    <div className={Styles.blockResult}>
      <h2 className={Styles.labelResult}>{label}</h2>
      <div className={Styles.grid}>
        {contenido.map((c, i) => (
          <div className={Styles.contCard} key={i}>
            <SearchPodcastCard podcast={c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSearch;
