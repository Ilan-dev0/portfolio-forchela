import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavBarElements'
import logo from '../../assets/img/logo2.png'

const NavBar = () => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><img style={{width: '100%'}} src={logo} /></NavLogo>
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="home">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="home">Serviços</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="home">Sobre Nós</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="home">Fale Conosco</NavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar;