import styled from "styled-components";

export const HomePageContainer = styled.section`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const FormContainer = styled.article`
    width:500px;
    height:400px;
    box-shadow: 0 0 10px lightgrey;
    border-radius: 10px;
`;

export const Form = styled.form`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Input = styled.input`
    width:50%;    
    padding:10px;
    border:none;
    box-shadow:0 0 10px lightgrey;
    border-radius:10px;
    margin:10px 0;
    
    &.submit-input{
        cursor:pointer;
        
    }
`;