import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    //title: 'Powered by React',
    title: '先随便写点看看',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        这是使用docusaurus创建的wiki界面，
        看看后面能不能搞成自己的博客。
      </>
    ),
  },
  {
    //title: 'Powered by React',
    title: '如果有两个',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        测试居中
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
      <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
