import * as React from 'react';
import styled from 'styled-components';
import { images } from '../../assets/styles/images';

export interface HeaderProps {

}

const Header: React.SFC<HeaderProps> = (props) => (<HeaderWrapper>
  <Flex>
    <Logo>MICHAL PUDELA</Logo>
    <Hamburger src={images.hamburger} />
  </Flex>
</HeaderWrapper>);


const HeaderWrapper = styled.header`
  background-color: ${ props => props.theme.codGray};
  padding: 16px;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.p`
  color: ${props => props.theme.white};
`

const Hamburger = styled.img``

export default Header;