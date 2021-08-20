import { CSSProperties, useState } from 'react';

interface KeyProps {
  style?: CSSProperties;
  value: number | string;
}

const Key: React.FC<KeyProps> = ({ children, style, value }) => {
  const [result, setResult] = useState<number>(0);

  const onKeyClick = () => {
    if (typeof value === 'number') {
      setResult(value);
    }
  };

  return (
    <div className="key" style={style}>
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Key;
