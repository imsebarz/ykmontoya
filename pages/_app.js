import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router';
import capitalize from '../utils/Capitalize';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (<>
    <Head>
      <title>Ykmontoya - {capitalize(router.pathname.split('/')[1])}</title>
      <meta name="description" content="Psicologa y Gestora Cultural" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>)
}

export default MyApp
