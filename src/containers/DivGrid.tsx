import { FC } from 'react';

type AppProps = {
  children: any;
};

const DivGrid: FC<AppProps> = ({ children }) => {
  return <div className="p-grid">{children}</div>;
};

export default DivGrid;
