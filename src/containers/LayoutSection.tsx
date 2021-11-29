import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type AppProps = {
  children: ReactNode;
};

const LayoutSection: FC<AppProps> = ({ children }) => {
  return <Div>{children}</Div>;
};

const Div = styled.div`
  padding: '1rem';
`;

export default LayoutSection;
