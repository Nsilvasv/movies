import styled from "styled-components"
import Logo from"../../assets/logo.png"
import { useState } from "react"

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`

const LogoImg = styled.img`
  font-size: 1.5em;
  font-weight: bold;
`

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; // Oculta os links em telas menores
  }
`

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;

  @media (max-width: 768px) {
    display: block; // Exibe o botão em telas menores
  }
`;

export const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    return(

        <NavbarContainer>

            <LogoImg src={Logo} alt="logo"/>

            <NavLinks>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </NavLinks>

            <HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>

        </NavbarContainer>
    )
}