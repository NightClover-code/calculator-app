import { CSSProperties } from 'react';

interface KeyProps {
  style?: CSSProperties;
}

const Key: React.FC<KeyProps> = ({ children, style }) => {
  return (
    <div className="key" style={style}>
      {children}
    </div>
  );
};

export default Key;
