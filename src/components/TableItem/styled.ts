import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;

    a{
        text-decoration: none;
        color: black;
        display: flex;    
        align-items: center;
        justify-content: end;
        padding: 5px;

        svg{
            width: 22px;
            color: #e2143a;
        }
    }
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;