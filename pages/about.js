import Head from 'next/head';
import styles from '../styles/About.module.css'

function About() {
  return (
    <>
      <Head>
        <title>About - Active Smart School</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>About Us</h1>
            <p>We are a dedicated team of professionals striving to provide the best education for your children.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <h2>Our Mission</h2>
            <p>Our mission is to create a learning environment that fosters creativity, critical thinking, and collaboration. We believe that every student has the potential to excel, and we are committed to helping them achieve their goals.</p>

            <h2>Our History</h2>
            <p>Active Smart School was founded in 2005 by a group of educators who wanted to create a school that would provide a high-quality education to students from all backgrounds. Since then, we have grown into a thriving community of learners, with a dedicated team of teachers and staff who are passionate about education.</p>

            <h2>Our Facilities</h2>
            <p>Our school is equipped with state-of-the-art facilities, including a science lab, a computer lab, a library, a gymnasium, and a performing arts center. We believe that a well-rounded education includes opportunities for students to explore their interests and develop their talents.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
