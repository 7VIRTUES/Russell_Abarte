import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <Image
            className={styles.photo}
            src="/profile-placeholder.svg"
            alt="Portrait placeholder for Russell Abarte"
            width={160}
            height={160}
            priority
          />
          <div>
            <h1>Russell Abarte</h1>
            <p>Welcome to my personal website.</p>
          </div>
        </header>

        <section className={styles.section}>
          <h2>Degree & Certificates</h2>
          <ul>
            <li>Bachelor of Science in Information Technology</li>
            <li>Web Development Certificate</li>
            <li>Cloud Fundamentals Certificate</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            I enjoy learning new technologies, building practical software, and
            balancing my time with family, friends, and community activities.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Personal Projects</h2>
          <ul>
            <li>Portfolio Website - A responsive site to share my work.</li>
            <li>Task Tracker - A simple productivity app.</li>
            <li>Learning Journal - Notes and experiments from my studies.</li>
          </ul>
        </section>

        <div className={styles.note}>
          <p>
            Tip: Replace the placeholder image and sample text with your actual
            picture and details.
          </p>
        </div>
      </main>
    </div>
  );
}
