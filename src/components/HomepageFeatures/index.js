import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '',
    description: (
      <>
      </>
    ), 
  },
  {
    title: 'About Me',
    // Svg: require('@site/static/img/homepage.svg').default,
    description: (
      <h4>
      不会写代码的老师不是好二次元.
      <p></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            看看近况🌊
          </Link>
        </div>
      </h4>
    ),
  },
  {
    title: '',
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    //文字居中
      <div className={clsx('col col--4')}>
      <div className="text--center">
          {/* <Svg className={styles.featureSvg} role="img" />  */}
      </div>
      <div className="text--center padding-horiz--md">      
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
