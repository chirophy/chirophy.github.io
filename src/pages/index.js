import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo from '@site/static/img/97031746_p0.jpg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img src={logo} style={{width: 300,borderRadius: '50%'}} /> 
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/home">
            我的知识库➡️
          </Link>
        </div>
      </div>
    </header>
  );
}
//标签页最前前面的抬头
//标签页前面由三个部分构成的，这是第一个地方
//剩余两个在docusaurus.config.js中
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      title={`ChiroPhy's Wiki`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
