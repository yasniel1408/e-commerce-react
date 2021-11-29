import { Footer, NavBar } from 'components';
import { LayoutSection } from 'containers';
import { FC, ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
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
