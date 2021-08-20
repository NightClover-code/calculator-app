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
  backgroundColor: 'var(--delete)',
  boxShadow: '0px 4px 0px var(--delete-shadow)',
  color: '#ffffff',
};

export const resultKeyStyle: CSSProperties = {
  fontSize: '18px',
  color: '#ffffff',
  gridColumn: 'span 2',
  backgroundColor: 'var(--result)',
  boxShadow: '0px 4px 0px var(--result-shadow)',
};

export const resetKeyStyle: CSSProperties = {
  fontSize: '18px',
  textTransform: 'uppercase',
  color: '#ffffff',
  gridColumn: 'span 2',
  backgroundColor: 'var(--delete)',
  boxShadow: '0px 4px 0px var(--delete-shadow)',
};
