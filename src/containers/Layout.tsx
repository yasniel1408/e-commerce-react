import { Footer, NavBar } from 'components';
import { LayoutSection } from 'containers';
import { FC } from 'react';

type AppProps = {
  children: any;
};

const Layout: FC<AppProps> = ({ children }) => {
  return (
    <main>
      <NavBar />
      <LayoutSection>{children}</LayoutSection>
      <Footer />
    </main>
  );
};

export default Layout;
