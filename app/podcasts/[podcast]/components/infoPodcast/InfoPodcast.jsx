import Styles from "./InfoPodcast.module.css";

const InfoPodcast = ({isDeployed, pd}) => {
  return (
    <div className={`${Styles.contAll} ${isDeployed ? Styles.small : ""}`}>
      <div className={Styles.contAuthorAndTitle}>
        <h1 className={Styles.title}>{pd.title}</h1>
        <h2 className={Styles.author}>Por {pd.autor.name}</h2>
      </div>
      <p className={`${Styles.description} ${isDeployed ? Styles.hide : ""}`}>
        {pd.description}
      </p>
      <div className={`${Styles.metaData} ${isDeployed ? Styles.hide : ""}`}>
        <div className={Styles.visitas}>
          <p className={Styles.number}>{pd.views}</p>
          <p className={Styles.numberDes}>Visitas</p>
        </div>
        <div className={Styles.episodios}>
          <p className={Styles.number}>{pd.episodes.length}</p>
          <p className={Styles.numberDes}>Episodios</p>
        </div>
      </div>
      <div className={`${Styles.sobreAutor} ${isDeployed ? Styles.hide : ""}`}>
        <h3 className={Styles.sobreAutorTitle}>Sobre el autor</h3>
        <p className={Styles.sobreAutorDes}>
          {pd.autor.description}
        </p>
      </div>
    </div>
  );
};

export default InfoPodcast;
