import { FC } from 'react';

type AppProps = {
  children: any;
};

const LayoutSection: FC<AppProps> = ({ children }) => {
  return <div style={{ padding: '1rem' }}>{children}</div>;
};

export default LayoutSection;
