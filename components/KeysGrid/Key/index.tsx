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
        return defaultCaseHandler(value);
    }
  };

  const evalExpression = (val: string) => {
    try {
      const operation = isFloat(eval(val))
        ? (Math.round(eval(val) * 100) / 100).toFixed(2).toString()
        : eval(val);

      return val !== '' ? setResult(operation) : '';
    } catch (err) {
      return setResult('Invalid Input');
    }
  };

  const defaultCaseHandler = (val: string) => {
    if (result !== 'Invalid Input') {
      return setResult(result + val);
    } else {
      return setResult(val);
    }
  };

  const isFloat = (n: number) => {
    return Number(n) === n && n % 1 !== 0;
  };

  return (
    <div className="key" style={style} onClick={onKeyClick}>
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default Key;
