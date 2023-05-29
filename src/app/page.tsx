import styles from '../styles/page.module.scss'
import Navbar from '@/components/atoms/navbar/navbar'
import PokedexCard from '@/components/atoms/PokedexCard/PokedexCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <PokedexCard/>
    </main>
  )
}
