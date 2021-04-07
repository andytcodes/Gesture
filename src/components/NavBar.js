import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/Gesture_Logo_Symbol.png';

export const Nav = styled.nav`
  background: #F3F6F4;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  justify-content: flex-start;
  box-shadow: 2px 0 10px 0 #A2A3AA;
`;

export const NavLink = styled(Link)`
  color: #A2A3AA;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FC9A06;
  }
  &:hover{
    color: #FC9A06;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #A2A3AA;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 39px;
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #F3F6F4;
  padding: 10px 22px;
  color: #FC9A06;
  outline: none;
  border: none;
  font-weight: bold;
  box-shadow: 0px 0px 0px 2px rgba(252,154,6,0.3);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: ##ffae33;
  }
`;

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='Gesture Logo' 
          style={{
            width: 70
          }}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/learning-paths'>
            Learning Paths
          </NavLink>
          <NavLink to='/profile'>
            Profile
          </NavLink>
          <NavLink to='/Gesture'>
            Camera Demo
          </NavLink>
          <NavBtnLink to='/logout'>Log Out</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;