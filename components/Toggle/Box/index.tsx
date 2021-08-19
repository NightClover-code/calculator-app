import { MouseEvent } from 'react';

interface BoxProps {
  id: string;
}

const Box: React.FC<BoxProps> = ({ id, children }) => {
  const onClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    //@ts-ignore
    const id: string = event.target.getAttribute('id');
  };

  return (
    <div id={id} className="box" onClick={onClickHandler}>
      <div className="toggle__circle" id="circle"></div>
      {children}
    </div>
  );
};

export default Box;
