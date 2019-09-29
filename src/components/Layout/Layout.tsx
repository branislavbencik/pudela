import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';


export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <Header />
    {children}
  </LayoutWrapper>
)

const LayoutWrapper = styled.div`
`

export default Layout;