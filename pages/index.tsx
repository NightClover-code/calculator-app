import { NextPage } from 'next';
import { seoConfig } from '../utils';
import SEO from '../components/SEO';
import Calculator from '../components/Calculator';
import { useContext } from 'react';
import { CounterContext } from '../context';
import Attribution from '../components/Attribution';

const HomePage: NextPage = () => {
  const { counter } = useContext(CounterContext);

  const themes = ['dark__theme', 'light__theme', 'funky'];

  return (
    <>
      <SEO {...seoConfig} />
      <main className={`app__container ${themes[counter]}`}>
        <div className="wrapper">
          <Calculator />
          <Attribution />
        </div>
      </main>
    </>
  );
};

export default HomePage;
