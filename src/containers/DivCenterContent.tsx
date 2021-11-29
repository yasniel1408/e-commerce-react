import { FC, ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
};

const DivCenterContent: FC<AppProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default DivCenterContent;
