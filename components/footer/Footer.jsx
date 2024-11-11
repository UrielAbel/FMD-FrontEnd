import Styles from './Footer.module.css'

import LogoFooter from '../../icons/LogoFooter'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <LogoFooter />
      <div className={Styles.contLinks}>
        <Link className={Styles.link} href='/'>
          <p className={Styles.text}>Home</p>
        </Link>
        <Link className={Styles.link} href='/podcasts'>
          <p className={Styles.text}>Podcasts</p>
        </Link>
      </div>
      <p className={Styles.copy}><span>&#169;</span> Feymind 2023. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
