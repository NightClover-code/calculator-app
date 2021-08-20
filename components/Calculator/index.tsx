import KeysGrid from '../KeysGrid';
import Toggle from '../Toggle';

const Calculator = () => (
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
      <h1>399,981</h1>
    </div>
    <div className="calculator__body">
      <KeysGrid />
    </div>
  </div>
);

export default Calculator;
