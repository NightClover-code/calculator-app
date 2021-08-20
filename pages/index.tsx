import { NextPage } from 'next';
import { seoConfig } from '../utils';
import SEO from '../components/SEO';
import Caclulator from '../components/Calculator';
import { useContext } from 'react';
import { CounterContext } from '../context';

const HomePage: NextPage = () => {
  const { counter } = useContext(CounterContext);

  const themes = ['dark__theme', 'light__theme', 'funky'];

  return (
    <>
      <SEO {...seoConfig} />
      <main className={`app__container ${themes[counter]}`}>
        <div className="wrapper">
          <Caclulator />
        </div>
      </main>
    </>
  );
};

export default HomePage;
