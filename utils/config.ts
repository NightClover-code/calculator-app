import { CSSProperties } from 'react';

export const seoConfig = {
  title: 'Welcome | Calculator app',
  description:
    'Simple and intuitive calculator, built for users to enjoy the modern web experience.',
  keywords: 'calculator, calculation, website',
};

export const delKeyStyle: CSSProperties = {
  fontSize: '18px',
  textTransform: 'uppercase',
  backgroundColor: 'hsl(225, 21%, 49%)',
  boxShadow: '0px 4px 0px hsl(224, 28%, 35%)',
  color: '#ffffff',
};

export const resultKeyStyle: CSSProperties = {
  fontSize: '18px',
  color: '#ffffff',
  gridColumn: 'span 2',
  backgroundColor: 'hsl(6, 63%, 50%)',
  boxShadow: '0px 4px 0px hsl(6, 70%, 34%)',
};

export const resetKeyStyle: CSSProperties = {
  fontSize: '18px',
  textTransform: 'uppercase',
  color: '#ffffff',
  gridColumn: 'span 2',
  backgroundColor: 'hsl(225, 21%, 49%)',
  boxShadow: '0px 4px 0px hsl(224, 28%, 35%)',
};
