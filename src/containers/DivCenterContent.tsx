import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type AppProps = {
  children: ReactNode;
};

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const DivCenterContent: FC<AppProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default DivCenterContent;
