import { Footer, NavBar } from 'components';
import { FC } from 'react';

type AppProps = {
  children: any;
};

const Layout: FC<AppProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
