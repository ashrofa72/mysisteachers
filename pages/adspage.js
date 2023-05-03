import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/adspage.module.css';

function AdsAndPublicationsPage() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Ads and School Publications</title>
      
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Ads and School Publications</h1>
        <h1 className={styles.title}>اعلانات واحداث واخبار المدرسة</h1>

        <p className={styles.description}>Here's a list of our current publications:</p>

        <ul className={styles.list}>
          <li>
            <Link href="/publications/magazine" className={styles.link}>
              Magazine
            </Link>
          </li>
          <li>
            <Link href="/publications/newspaper" className={styles.link}>
              Newspaper
            </Link>
          </li>
          <li>
            <Link href="/publications/yearbook" className={styles.link}>
              Yearbook
            </Link>
          </li>
        </ul>

        <p className={styles.ad}>If you're interested in advertising with us, please contact our advertising department at ads@school.edu.</p>
      </main>
    </div>
  );
}

export default AdsAndPublicationsPage;
