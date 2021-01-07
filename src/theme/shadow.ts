import { CSSProperties } from 'styled-components';

export type Shadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

const shadow: Record<Shadow, CSSProperties['boxShadow']> = {
  none: 'none',
  sm: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
  base: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, 
     rgba(0, 0, 0, 0.06) 0px 1px 2px 0px`,
  md: `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, 
     rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`,
  lg: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, 
     rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
  xl: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
     rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`,
  '2xl': `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`,
};

export default shadow;
