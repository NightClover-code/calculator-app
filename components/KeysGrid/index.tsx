import Key from './Key';

const KeysGrid = () => {
  return (
    <div className="keys__grid">
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key
        style={{
          fontSize: '22px',
          textTransform: 'uppercase',
          backgroundColor: 'hsl(225, 21%, 49%)',
          boxShadow: '0px 4px 0px hsl(224, 28%, 35%)',
          color: '#ffffff',
        }}
      >
        del
      </Key>
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
    </div>
  );
};

export default KeysGrid;
