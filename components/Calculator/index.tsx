import KeysGrid from '../KeysGrid';
import Toggle from '../Toggle';

const Caclulator = () => (
  <div className="calculator__container">
    <div className="caclulator__head">
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
      <div className="calculator__foot">
        <div className="reset__key"></div>
        <div className="result__key"></div>
      </div>
    </div>
  </div>
);

export default Caclulator;
