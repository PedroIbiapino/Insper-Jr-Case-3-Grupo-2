import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/index/header.component'
import { Main } from '../components/index/main.component'
import { Funciona } from '../components/index/funciona.component'
import { Chefes } from '../components/index/chefes.component'
import { Linha_tempo } from '../components/index/linha_tempo'
import { Footer } from '../components/index/footer.component'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chef DuLar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/logo.ico" />
      </Head>
      <Header/>
      <Main/>
      <Funciona/>
      <Chefes/>
      <Linha_tempo/>
      <Footer/>
    </div>
  )
}