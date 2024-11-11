'use client'
import EpisodioComponente from '../episodioComponente/EpisodioComponente';
import Styles from './ListEpisodes.module.css'
import UpArrow from '@/icons/UpArrow';

const ListEpisodes = ({episodes, isDeployed, setDepFun, responsive}) => {
  if (!responsive) {
    return (
      <div className={`${Styles.contAll} ${isDeployed ? Styles.big : ""}`}>
        <div className={Styles.head}>
          <p className={Styles.normalText}>Episodios</p>
          <div onClick={() => setDepFun(!isDeployed)} className={`${Styles.contIcon} ${isDeployed ? Styles.reverse : ""}`}>
            <UpArrow />
            </div>
          </div>
        {isDeployed && 
          <div className={Styles.contEpisodes}>
          {episodes.map((ep) => (
            <EpisodioComponente episode={ep} />
          ))}
          </div>
        }
        {!isDeployed &&
          <div className={Styles.contNowPlaying}>
            <p className={Styles.grayText}>Ahora reproduciendo: <span className={Styles.npText}>{episodes[0].title}</span></p>
          </div>
        }
      </div>
    );
  } else {
    return(
    <div className={Styles.contRes}>
      <div className={Styles.head}>
        <p className={Styles.normalTextRes}>Episodios</p>
      </div>
      <div className={Styles.contEpisodes}>
      {episodes?.map((ep) => (
            <EpisodioComponente episode={ep}/>
          ))} 
      </div>

    </div>
    )
  }
};

export default ListEpisodes;
