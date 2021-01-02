import Head from 'next/head';
import styles from '../styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
