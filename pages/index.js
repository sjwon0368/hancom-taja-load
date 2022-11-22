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
          <iframe style='width: 100%; height: 100%; outline: none;' src='https://taja3client.netlify.app/'>죄송하지만 현재 이 브라우저는 iframe요소를 지원하지 않는 것 같습니다.</iframe>
        </p>
      </main>
    </div>
  )
}
