import React from 'react';

import Logo from '../../assets/logo.png'

import { Container,
         ContainerLeft, 
         ContainerRight, 
         HeaderAvatar,
         HeaderButtonAvatar,
         HeaderTitle,
         IconButtonMenu
        } from './styles';

import { MdOutlineSearch, MdAccountCircle } from "react-icons/md";        

function Header() {
  return (
    <Container>
        <ContainerLeft>
          <img 
            src={Logo}
            alt=""
          />
          <h1>Cadastro Usuário</h1>
        </ContainerLeft>

        <ContainerRight>
            
            <IconButtonMenu>
                <MdOutlineSearch 
                size={30}
                />
            </IconButtonMenu>

            <IconButtonMenu>
                <MdAccountCircle
                size={30}
                />
            </IconButtonMenu>

            <HeaderAvatar>
              <HeaderTitle>
                <h2>Miguel Furghestti</h2>
                <p>Sam Security</p>
              </HeaderTitle>

              <HeaderButtonAvatar>
                <img 
                src="https://avatars.githubusercontent.com/u/85628259?v=4" 
                alt="Miguel Furghestti" 
                />
              </HeaderButtonAvatar>
            </HeaderAvatar>
        </ContainerRight>
    </Container>
  );
}

export default Header;