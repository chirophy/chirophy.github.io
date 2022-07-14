import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo from '@site/static/img/97031746_p0.jpg'
import {ReactComponent  as Svgimg} from '../../static/img/code.svg'

// 不使用
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
            to="docs/Notes/home/">
            我的知识库➡️
          </Link>
        </div>
      </div>
    </header>
  );
}

// 使用
function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          Code
        </h1>
        <h2 className={styles.leftContainer_p}>
          and
        </h2>
        <h1 className={styles.leftContainer_h1}>
          Play.
        </h1>
        <br />
        <p className={styles.leftContainer_p}>
          不会写代码的老师不是好二次元。
          <br />
          记录所学知识，记录生活感悟。
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
          <Link className={styles.hero_a} to="docs/Notes/home/">
            Click➡️
          </Link>
          </button>
          <span className={styles.buttonLeftText}>
            Get Start. <br /> Show my Wiki.
          </span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src='https://chirophy.online/assets/images/code-f9e79eee219cf9aeed9d6a5611d96b1e.svg' />
      </div>
    </div>
  )
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
      description="Wiki">
      {/* <HomepageHeader /> */}
      <MyHero />
      <main>
        {/* <HomepageFeatures /> */}
        {/* <MyHero /> */}
      </main>
    </Layout>
  );
}
