import { useContext } from 'react';
import { ResultContext } from '../../context';
import KeysGrid from '../KeysGrid';
import Toggle from '../Toggle';

const Calculator = () => {
  const { result } = useContext(ResultContext);

  return (
    <div className="calculator__container">
      <div className="calculator__head">
        <h2>calc</h2>
        <div className="theme__toggler__container">
          <h4>Theme</h4>
          <div className="theme__toggler">
            <span>123</span>
            <Toggle />
          </div>
        </div>
      </div>
      <div className="calculator__screen">
        <div className="container">
          <h1>{result}</h1>
        </div>
      </div>
      <div className="calculator__body">
        <KeysGrid />
      </div>
    </div>
  );
};

export default Calculator;
