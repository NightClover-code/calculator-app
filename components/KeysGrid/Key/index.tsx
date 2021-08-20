import { CSSProperties, useContext, MouseEvent } from 'react';
import { ResultContext } from '../../../context';

interface KeyProps {
  style?: CSSProperties;
  value: number | string;
}

const Key: React.FC<KeyProps> = ({ children, style, value }) => {
  const { result, setResult } = useContext(ResultContext);

  const onKeyClick = () => {
    //@ts-ignore
    setResult(result + value);
  };

  return (
    <div className="key" style={style} onClick={onKeyClick}>
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Key;
