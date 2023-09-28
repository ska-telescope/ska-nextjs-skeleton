import Image from 'next/image';
import styles from '@/styles/page.module.css';
import Footer from '@/components/footer';
import Intro from '@/components/intro';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to SKAO Next.js skeleton project
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              className={styles.skaoLogo}
              src="/images/skao.svg"
              alt="SKAO Logo"
              width={199}
              height={54}
              priority
            />
          </a>
        </div>
      </div>

      <Intro />
      <Footer />
    </main>
  );
}

export default Home;
