import { FC, ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
};

const DivGrid: FC<AppProps> = ({ children }) => {
  return <div className="p-grid">{children}</div>;
};

export default DivGrid;
