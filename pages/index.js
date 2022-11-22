import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>한컴타자 다이렉트링크</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          <iframe width='100%' height='100%' src='https://taja3client.netlify.app/'></iframe>
        </p>
      </main>
    </div>
  )
}
