import { delKeyStyle, resetKeyStyle, resultKeyStyle } from '../../utils';
import Key from './Key';

const KeysGrid = () => {
  return (
    <div className="keys__grid">
      <Key value={7}>7</Key>
      <Key value={8}>8</Key>
      <Key value={9}>9</Key>
      <Key value={'delete'} style={delKeyStyle}>
        del
      </Key>
      <Key value={4}>4</Key>
      <Key value={5}>5</Key>
      <Key value={6}>6</Key>
      <Key value={'+'}>+</Key>
      <Key value={1}>1</Key>
      <Key value={2}>2</Key>
      <Key value={3}>3</Key>
      <Key value={'-'}>-</Key>
      <Key value={'.'}>.</Key>
      <Key value={'0'}>0</Key>
      <Key value={'/'}>/</Key>
      <Key value={'x'}>x</Key>
      <Key value={'reset'} style={resetKeyStyle}>
        Reset
      </Key>
      <Key value={'='} style={resultKeyStyle}>
        =
      </Key>
    </div>
  );
};

export default KeysGrid;
