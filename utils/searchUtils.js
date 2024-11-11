const baseURL = "http://localhost:2500";

const getResultByKeyWord = async (keyWord) => {
  let podRes = await fetch(`${baseURL}/contenido/palabraClave/${keyWord}`).then((data) => data.json());

  return { articles: podRes.articulosEncontrados, podcasts: podRes.podcastsEncontrados };
};

const getResultByCategory = async (category) => {
  let searchRes = await fetch(`${baseURL}/contenido/category/${category}`, {
    next: { revalidate: 60 },
  }).then((data) => data.json());

  return { articles: searchRes.articulosEncontrados, podcasts: searchRes.podcastsEncontrados };
};

const getContent = async (params) => {
  if (params.s) {
    let searchName = decodeURIComponent(params.s);
    let res = await getResultByKeyWord(searchName);
    return [res, searchName, true]

  } else if (params.c) {
    let category = decodeURIComponent(params.c);
    let res = await getResultByCategory(category)
    return [res, category, true]
  } else {
    return [[], [], false]
  }
};

module.exports = {
  getContent
};
