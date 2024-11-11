import Styles from "./IndiceContenido.module.css";
import Link from "next/link";

const IndiceContenido = ({ contenido, uri }) => {
  return (
    <div className={Styles.indexCont}>
      <h3 className={Styles.indexSub}>Índice De Contenido</h3>
      <ol>
        {contenido.map((element, index) => (
          <li className={Styles.indexLi}>
            <Link
              className={Styles.linkText}
              href={`/articulos/${uri}#${index + 1}`}
            >
              {element}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default IndiceContenido;
