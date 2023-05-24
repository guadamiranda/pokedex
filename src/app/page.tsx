import styles from '../styles/page.module.scss'
import Navbar from '@/components/atoms/navbar/navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar generations={['Generation 1', 'Generation 2', 'Generation 3', 'Generation 4', 'Generation 5', 'Generation 6']}/>
    </main>
  )
}
