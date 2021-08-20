import Box from './Box';

const Toggle = () => {
  return (
    <div className="toggle__slider">
      <Box id="box__1" dataId={0}>
        <div className="toggle__circle" id="circle"></div>
      </Box>
      <Box id="box__2" dataId={1}></Box>
      <Box id="box__3" dataId={2}></Box>
    </div>
  );
};

export default Toggle;
