import styled from "styled-components";

import Colors from "../../util/color";

export const Container = styled.div`
    display: flex;
    //flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.black};
    height: 80px;
    color: ${Colors.white};

    top: 0px;
    transition: all 0.5s ease-in-out 0s;
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;

    width: 100%;
`;

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    //flex: 0.27;
    padding-left: 20px;
    flex-grow: 99;

    img {
        width: 95px;
    }

    h1 {
        margin-left: 20px;
    }
`; 

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    //flex: 0.73;
    margin-right: auto;
    justify-content: flex-end;
    padding-right: 20px;
`; 

export const HeaderAvatar = styled.div`
    display: flex;
    align-items: center;
`; 

export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`; 

export const HeaderButtonAvatar = styled.button`
    cursor: pointer;
    background-color: ${Colors.black};
    border: none;
    outline-width: 0;
    margin-left: 10px;

    img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: 1px solid ${Colors.white};
    }
    
`; 

export const IconButtonMenu = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;


    &:hover {
        color: ${Colors.green}
    }
    
`; 