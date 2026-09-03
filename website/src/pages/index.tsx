import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="World Fabric" description="Observatory of Global Strategic Capacity">
      <main>
        <header className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">World Fabric</h1>
            <p className="hero__subtitle">Observe how the material systems of globalization are changing.</p>
            <div>
              <Link className="button button--primary button--lg" to="/world">Explore the World</Link>{' '}
              <Link className="button button--secondary button--lg" to="/model">Understand the Model</Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
