import Link from 'next/link'
import Image from 'next/image'
import styles from './nav.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/REB Logo.png" alt="Logo" width={99} height={99} />
      </div>

      <nav className={styles.navLinks}>
        <Link href="/" className={styles.link}>HOME</Link>
        <Link href="/about" className={styles.link}>ABOUT</Link>
        <Link href="/projects" className={styles.link}>PROJECTS</Link>
        <Link href="/products" className={styles.link}>PRODUCTS</Link>
        <Link href="/contact" className={styles.link}>CONTACT</Link>
      </nav>
    </header>
  )
}
