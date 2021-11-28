import React, { FC } from 'react';

type AppProps = {
  children: any;
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
