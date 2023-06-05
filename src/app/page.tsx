import styles from '../styles/page.module.scss'
import Navbar from '@/components/atoms/navbar/navbar'
import PokedexCard from '@/components/atoms/PokedexCard/PokedexCard'
import Footer from '@/components/atoms/footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <br></br>
      <PokedexCard/>
      <br></br>
      <Footer/>
    </main>
  )
}
