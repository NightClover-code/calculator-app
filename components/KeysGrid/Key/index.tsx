import { CSSProperties, useContext, MouseEvent } from 'react';
import { ResultContext } from '../../../context';

interface KeyProps {
  style?: CSSProperties;
  value: number | string;
}

const Key: React.FC<KeyProps> = ({ children, style, value }) => {
  const { setResult } = useContext(ResultContext);

  const onKeyClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log(value);
  };

  return (
    <div className="key" style={style} onClick={onKeyClick}>
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Key;
