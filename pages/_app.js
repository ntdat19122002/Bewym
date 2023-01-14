import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component,  pageProps: { session, ...pageProps }}) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    )
    
}

export default MyApp
