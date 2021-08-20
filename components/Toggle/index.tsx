import { useContext } from 'react';
import { CounterContext } from '../../context';
import Box from './Box';

const Toggle = () => {
  const { counter } = useContext(CounterContext);

  const distance = 22;
  const preciseDistance = distance * counter;

  return (
    <div className="toggle__slider no__select">
      <Box id="box__1" dataId={0}>
        <div
          className="toggle__circle"
          id="circle"
          style={{
            transform: `translateX(${preciseDistance}px)`,
          }}
        ></div>
      </Box>
      <Box id="box__2" dataId={1}></Box>
      <Box id="box__3" dataId={2}></Box>
    </div>
  );
};

export default Toggle;
