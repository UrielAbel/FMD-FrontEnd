import Styles from "./Player.module.css";

import Mute from "@/icons/Mute";
import Pause from "@/icons/Pause";
import Play from "@/icons/Play";
import UnMuted from "@/icons/UnMuted";
import AvButton from "@/icons/AvButton";
import PrevButton from "@/icons/PrevButton";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Player = ({ episode, img }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handlePlaybackRate = () => {
    const audio = audioRef.current;

    if (playbackRate === 1) {
      audio.playbackRate = 2;
      setPlaybackRate(2);
    } else {
      audio.playbackRate = 1;
      setPlaybackRate(1);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = e.target.value;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const avTime = () => {
    const audio = audioRef.current;
    audio.currentTime += 5;
    setCurrentTime(currentTime + 5);
  };
  const prevTime = () => {
    const audio = audioRef.current;
    audio.currentTime -= 5;
    setCurrentTime(currentTime - 5);
  };

  const formatSecondsToTime = (seconds) => {
    const pad = (num) => String(num).padStart(2, '0');
  
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formatted = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}` : `${pad(minutes)}:${pad(remainingSeconds)}`
  
    return formatted;
  };

  let formatedCurrent = formatSecondsToTime(currentTime);
  let formatedDuration = formatSecondsToTime(duration);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>{episode?.title}</h2>
      <div className={Styles.times}>
        <p className={Styles.pTime}>{formatedCurrent}</p>
        <p className={Styles.pTime}>{formatedDuration}</p>
      </div>
      <div className={Styles.timeBar}>
        <audio ref={audioRef} src={episode?.audioUrl} />
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className={Styles.progressBar}
        />
      </div>
      <div className={Styles.controls}>
        <div className={Styles.normalButton} onClick={handlePlaybackRate}>
          {playbackRate === 1 ? "1x" : "2x"}
        </div>
        <div className={Styles.timeButton} onClick={prevTime}><PrevButton/></div>
        <div className={Styles.pauseButton} onClick={handlePlayPause}>{isPlaying ? <Pause /> : <Play />}</div>
        <div className={Styles.timeButton} onClick={avTime}><AvButton/></div>
        <div className={Styles.normalButton} onClick={handleMute}>{isMuted ? <UnMuted /> : <Mute />}</div>
      </div>
    </div>
  );
};

export default Player;
