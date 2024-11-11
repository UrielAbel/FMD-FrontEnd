import Styles from './podcast.module.css'

import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import PodcastContent from "./components/podcastContent/PodcastContent";
import ListEpisodes from "./components/listEpisodes/ListEpisodes";
import ContRelaSlider from './components/ContRelaSlider/ContRelaSlider';

import { notFound } from "next/navigation";
import { getPodcastByName, getPodcasts } from '@/utils/podcastUtils'

const Podcast = async (props) => {
  let params;
  if (props) {
    params = props.params
  }
  let contenido = await getPodcastByName(params?.podcast);
  let contRelated = await getPodcasts();
  if (contenido) {
    return (
      <>
        <Nav />
        <PodcastContent contenido={contenido}/>
        <ListEpisodes responsive episodes={contenido.episodes}/>
        <ContRelaSlider contenido={contRelated} />
        <Footer />
      </>
    );
  } else {
    notFound();
  }
};

export async function generateMetadata({ params }) {
  const podcast = await getPodcastByName(params.podcast);
  return {
    title: podcast.title,
    description: podcast.description,
    openGraph: {
      title: podcast.title,
      description: podcast.description,
      images: [podcast.imageUrl],
    },
  };
}

export default Podcast;
