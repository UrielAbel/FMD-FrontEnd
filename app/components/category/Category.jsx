import Styles from './Category.module.css'

import CategoryIcons from '@/icons/CategoryIcons'

import Link from 'next/link'

const Category = ({ contenido }) => {
  return (
    <div className={Styles.contenedor}>
      {contenido?.map((cat) => (
        <Link className={Styles.categoria} href={{ pathname: '/search', query: { c: cat }}}>
          <div>
            {CategoryIcons(cat)}
          </div>
          <p className={Styles.texto}>
            {cat}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default Category
