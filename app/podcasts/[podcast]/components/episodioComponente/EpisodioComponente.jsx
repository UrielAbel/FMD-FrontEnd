import Styles from "./EpisodioComp.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EpisodioComponente({ episode }) {
  const [mostrarBtnVerMas, setMostrarBtnVerMas] = useState(false);
  const [desplegarDescripcion, setDesplegarDescripcion] = useState(false);
  const [textoBtn, setTextoBtn] = useState(false);

  function DesplegarDescripcion() {
    setDesplegarDescripcion(!desplegarDescripcion);
    setTextoBtn(!textoBtn);
  }
  useEffect(() => {
    const descripcionEpisodio = document.getElementById("descripcionEpisodio");

    if (descripcionEpisodio.textContent.length > 80) {
      setMostrarBtnVerMas(true);
    }
  }, []);

  const formatSecondsToTime = (seconds) => {
    const pad = (num) => String(num).padStart(2, '0');
  
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formatted = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}` : `${pad(minutes)}:${pad(remainingSeconds)}`
  
    return formatted;
  };

  let formatedDuration = formatSecondsToTime(episode?.duration);

  return (
    <div
      className={
        desplegarDescripcion ? Styles.ContGralDesplegado : Styles.ContGral
      }
    >
      <div className={Styles.contImg}>
        <Image
          src={episode?.imageUrl}
          width={70}
          height={70}
          alt="Imagen del episodio"
          className={Styles.imagen}
        />
      </div>

      <div className={Styles.ContInfo}>
        <h4 className={Styles.tituloEpisodio} id="tituloEpisodio">
          {episode?.title}
        </h4>

        <div className={Styles.descripcionEpisodio}>
          <p id="descripcionEpisodio">{episode?.description}</p>
        </div>

        <div className={Styles.footerEpisodio}>
          <div className={Styles.duracionEpisodioCont}>
            {/* svg to ./icons later */}
            <svg
              width={10}
              height={10}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <time className={Styles.duracion}>{formatedDuration}</time>
          </div>

          {mostrarBtnVerMas && (
            <button className={Styles.btnVerMas} onClick={DesplegarDescripcion}>
              {textoBtn}
              {textoBtn ? "Ocultar" : "Ver Más"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
