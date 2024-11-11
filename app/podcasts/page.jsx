
import Footer from '@/components/footer/Footer'
import styles from './notFound.module.css'
import Image from 'next/image'
import Link from 'next/link';

function NotFound () {
  return (
    <>
      <div className={styles.contGralNF}>
        <div className={styles.SecondaryCont}>
          <p className={styles.TextInfo}>Aun Estamos Trabajando En Esta Seccion</p>
          <p className={styles.TextInfo2}>En Breve Estará Disponible</p>
          <div className={styles.ContImg}>
            <Image src='/CabezaTriste.png' alt='Feymind NotFound Imege' width={100} height={100} className={styles.ImgNF} />
          </div>
          <button className={styles.btnVolver} ><Link href='/' className={styles.btnVolverLink}>Volver al inicio</Link></button>
        </div>
          <Footer />
      </div>
    </>
  )
}

export default NotFound
