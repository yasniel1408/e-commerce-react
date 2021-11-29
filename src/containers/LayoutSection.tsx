import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type AppProps = {
  children: ReactNode;
};

const StyledDiv = styled.div`
  padding: 1rem;
`;

const LayoutSection: FC<AppProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default LayoutSection;
