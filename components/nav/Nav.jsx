import Styles from './Nav.module.css'

import Logo from '@/icons/Logo'
import Usuario from '@/icons/Usuario'
import Search from '@/icons/Search'
import Input from '../Input/Input'


import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <Link href='/'>
        <Logo size={50} />
      </Link>
      <div className={Styles.contInput}>
        <Input />
        <Usuario size={45} />
      </div>
    </nav>
  )
}

export default Nav
