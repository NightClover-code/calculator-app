import { delKeyStyle, resetKeyStyle, resultKeyStyle } from '../../utils';
import Key from './Key';

const KeysGrid = () => {
  return (
    <div className="keys__grid">
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key style={delKeyStyle}>del</Key>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key>+</Key>
      <Key>1</Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key>-</Key>
      <Key>.</Key>
      <Key>0</Key>
      <Key>/</Key>
      <Key>x</Key>
      <Key style={resetKeyStyle}>Reset</Key>
      <Key style={resultKeyStyle}>=</Key>
    </div>
  );
};

export default KeysGrid;
