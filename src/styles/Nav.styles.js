import styled from "styled-components";


export const Nav = styled.nav`
    width:100%;
    display:flex;
    border-bottom:1px solid grey;
    height:80px;
    position:fixed;
`;

export const Ul = styled.ul`
    width:100%;
    display:flex;
    align-items:center;
    list-style:none;
`;

export const Li = styled.li`
    margin:0 10px;
    box-shadow:0 0 10px light:grey;
    width:100px;
    height:100%;
    display:flex;
    align-items:center;
    
    &:hover{
    cursor:pointer;
    text-decoration:underline;
    }
`;

export const NavLink = styled.a`
    color:black;
    text-decoration:none;
`;