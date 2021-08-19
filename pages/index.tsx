import { NextPage } from 'next';
import { seoConfig } from '../utils';
import SEO from '../components/SEO';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
      <main className="app__container">
        <div className="wrapper"></div>
      </main>
    </>
  );
};

export default HomePage;
