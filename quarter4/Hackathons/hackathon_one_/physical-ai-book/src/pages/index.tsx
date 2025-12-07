import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/foundations/intro">
            Start Learning The Curriculum ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2>Welcome to the Physical AI & Humanoid Robotics Textbook</h2>
              <p>
                This open-source curriculum bridges the gap between digital intelligence (LLMs, VLA) 
                and physical embodiment (ROS 2, Isaac Sim, Hardware).
              </p>
              <h3>Core Modules:</h3>
              <ul>
                <li><strong>Foundations:</strong> Hardware Setup (RTX vs Jetson)</li>
                <li><strong>Nervous System:</strong> ROS 2 Middleware & Architecture</li>
                <li><strong>Digital Twin:</strong> Physics Simulation with Gazebo & Unity</li>
                <li><strong>The Brain:</strong> Navigation & Isaac Sim</li>
                <li><strong>VLA:</strong> Vision-Language-Action Models</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
