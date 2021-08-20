import { CSSProperties, useContext } from 'react';
import { ResultContext } from '../../../context';

interface KeyProps {
  style?: CSSProperties;
  value: string;
}

const Key: React.FC<KeyProps> = ({ children, style, value }) => {
  const { result, setResult } = useContext(ResultContext);

  const onKeyClick = () => {
    switch (value) {
      case '=':
        return evalExpression(result);
      case 'delete':
        return setResult(result.slice(0, -1));
      case 'reset':
        return setResult('');
      default:
        return setResult(result + value);
    }
  };

  const evalExpression = (val: string) => {
    try {
      return val !== '' ? setResult(eval(val)) : '';
    } catch (err) {
      return setResult('Invalid Input');
    }
  };

  return (
    <div className="key" style={style} onClick={onKeyClick}>
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Key;
