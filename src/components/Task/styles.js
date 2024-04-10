import styled from "styled-components";

export const StyledTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #CCC;
    color: #666;

    button{
        border: none;
        background: transparent;
        color: #FF5555;
        font-size: 30px;
        cursor: pointer;

        &:hover{
            color: #FF0000;
        }

        
    }
`