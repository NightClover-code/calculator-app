import Key from '../KeysGrid/Key';

const Caclulator = () => (
  <div className="calculator__container">
    <div className="caclulator__head">
      <h2>calc</h2>
      <div className="theme__toggler__container">
        <h4>Theme</h4>
        <div className="theme__toggler">
          <span>123</span>
          <div className="toggle__slider">
            <div className="toggle__circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="calculator__screen">
      <h1>399,981</h1>
    </div>
    <div className="calculator__body">
      <div className="keys__grid">
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
      </div>
      <div className="calculator__foot">
        <div className="reset__key"></div>
        <div className="result__key"></div>
      </div>
    </div>
  </div>
);

export default Caclulator;
