const baseURL = "http://localhost:2500";

const obtenerDatos = async () => {
  let podRes = await fetch(baseURL + "/podcasts", {
    next: { revalidate: 60 },
  }).then((data) => data.json());

  return podRes;
};

const obtenerArticulos = async () => {
  let posts = await fetch(baseURL + "/articulos", {
    next: { revalidate: 60 },
  }).then((data) => data.json());
  return posts
};

const mezclarDatos = (contenido) => {
  let shuffle = (array) => {
    let i = array.length;
    while (--i > 0) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[j], array[i]] = [array[i], array[j]];
    }
  };
  let n = contenido.filter((c) =>
    c.subCategory.includes("Naturaleza Del Conocimiento")
  );
  let d = contenido.filter((c) =>
    c.subCategory.includes("Desarrollo Personal")
  );
  let u = contenido;

  shuffle(n);
  shuffle(d);

  return [u, n, d];
};

module.exports = {
  obtenerDatos,
  obtenerArticulos,
  mezclarDatos,
};
