import styled from "styled-components";

export const StyledList = styled.div`

    background-color: #fff;
    max-width: 600px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #DDD;

    margin: 40px auto;/*CENTRALIZA a ZIV - 40(zero) para top e botton - auto para esquerda e direita*/
    box-sizing: border-box;/*Caso acrescente Padding, não extrapola o max-width informado*/

    form{
        display: flex;
        justify-content: space-between;

        input{
            flex-grow: 1;/*Ocupar todo o espaço disponível*/
            height: 54px;
            border-radius: 5px;
            border: solid 1px #ccc;
            box-sizing: border-box;
            padding: 10px;
        }

        button{
            background-color: #001D29;
            color: #fff;
            border: none;
            width: 105px;
            margin-left: 10px;
            border-radius: 5px;
            cursor: pointer;

            &:hover{ /* & => equivalente a THIS */
                background-color: black;
            }

            &:disabled{
                background-color: #CCC;
            }
        }
    }

`
