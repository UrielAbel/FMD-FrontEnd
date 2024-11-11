"use client";
import Styles from "./PodcastContent.module.css";

import Player from "../player/Player";
import ListEpisodes from "../listEpisodes/ListEpisodes";
import InfoPodcast from "../infoPodcast/InfoPodcast";

import { useEffect, useState } from "react";
import Image from "next/image";

const PodcastContent = ({ contenido }) => {
  const [currentEpisode, setCurrtentEpisode] = useState("");
  const [isDeployed, setIsDeployed] = useState(false);
  const setDepFun = (state) => {
    setIsDeployed(state)
  }
  useEffect(() => {
    if (contenido) {
      setCurrtentEpisode(contenido.episodes[0]);
    }
  }, []);

  return (
    <div className={Styles.contAll}>
      <Image
        src={contenido?.imageUrl}
        alt="imageArticle"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={Styles.blur}></div>
      <div className={Styles.gradient}></div>

      <div className={Styles.contenido}>
        <div className={Styles.contImagePodcast}>
          <Image
            src={contenido?.imageUrl}
            alt="podcast"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={Styles.contInfo}>
          <InfoPodcast isDeployed={isDeployed} pd={contenido} />
          <ListEpisodes isDeployed={isDeployed} setDepFun={setDepFun} episodes={contenido.episodes}/>
        </div>
      </div>
      <Player episode={currentEpisode} />
    </div>
  );
};

export default PodcastContent;
