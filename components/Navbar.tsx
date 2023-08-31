// Navbar.js
import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
      return (
     <>
        <header className={styles.header}>
         <nav className={styles.navbar}>
         <Link className={styles.link} href='/'> <p className={styles.navlogo}>[BrandLogo]</p></Link>
         <ul className={isOpen === false ?  styles.navmenu : styles.navmenu +' '+ styles.active }>
         <li className={styles.navitem}>
         <Link href='/' className={styles.link}> 
         <p className={isOpen === false ? 
            styles.navlink : styles.navlink+' '+styles.active} onClick={openMenu}>Home
         </p>
         </Link>
         </li><li className={styles.navitem}>
                        <Link href='/about' className={styles.link}>
                          <p className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>About</p>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/contact' className={styles.link}>
                         <p className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Contact</p>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
            </header>
     </>
      
      );
    }