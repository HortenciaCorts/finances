import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

export const Label = styled.label`
    width: 120px;
    margin: 10px;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    padding: 8px 0;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #ebdff5;
    border-radius: 5px;
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #ebdff5;
    border-radius: 5px;
`;

export const Button = styled.button` 
    width: 100%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid #ebdff5;
    border-radius: 5px;
    background: #ebdff5;
    color: darkslategrey;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #cdbadd;
        color: black;
        font-weight: bold;
    }
`;