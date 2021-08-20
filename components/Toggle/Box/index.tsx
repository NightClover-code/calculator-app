import { MouseEvent, useContext } from 'react';
import { CounterContext } from '../../../context';

interface BoxProps {
  id: string;
  dataId: number;
}

const Box: React.FC<BoxProps> = ({ id, children, dataId }) => {
  const { setCounter } = useContext(CounterContext);

  const onClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    //@ts-ignore
    const id: string | null = event.target.getAttribute('data-id');

    id !== null ? setCounter(parseInt(id)) : setCounter(id);
  };

  return (
    <div id={id} className="box" data-id={dataId} onClick={onClickHandler}>
      {children}
    </div>
  );
};

export default Box;
