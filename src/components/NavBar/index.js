import React from "react";
import {Nav, NavbarContainer, NavLogo, Link, LinkContainer} from './NavBarElements'
import logo from '../../assets/img/logo2.png'

const NavBar = () => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><img style={{width: '100%'}} src={logo} /></NavLogo>
                        <Link href="">Home</Link>
                        <Link href="">Serviços</Link>
                        <Link href="">Sobre Nós</Link>
                        <Link href="">Fale conosco</Link>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar;