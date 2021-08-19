import { NextPage } from 'next';
import { seoConfig } from '../utils';
import SEO from '../components/SEO';
import Caclulator from '../components/Calculator';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
      <main className="app__container">
        <div className="wrapper">
          <Caclulator />
        </div>
      </main>
    </>
  );
};

export default HomePage;
