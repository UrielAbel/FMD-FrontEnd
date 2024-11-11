import { content } from "./contenido";

const baseURL = "http://localhost:2500"

const getPodcastByName = async (path) => {
    let podRes = await fetch(`${baseURL}/podcast/${path}`, {next: { revalidate: 60 }})
    .then(data => data.json())

    return podRes
}

const getPodcasts = async () => {
    let podRes = await fetch(baseURL + '/home/podcasts', {next: { revalidate: 60 }})
    .then(data => data.json())
    let shuffle = (array) => {
        let i = array.length;
        while (--i > 0) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[j], array[i]] = [array[i], array[j]];
        }
    }
    shuffle(podRes)

    return podRes
}

module.exports = {
    getPodcastByName,
    getPodcasts
}