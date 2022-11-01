import Head from 'next/head'
import HomePage from '../components/homePage'


export default function Home(props) {
  return (
    <>
    <div>
      <Head>
        <title>Tausur Rahaman</title>
        <meta name="description" content="MetaWave - a personal portfolio" />
        <link rel="icon" href="/metaIcon.png" />
      </Head>
      <main>
        <HomePage theme={props.theme}/>
      </main>
    </div>
    </>
  )
}
