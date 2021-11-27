import styled from "styled-components";
import checked from '../../images/icon-check.svg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.border};
    margin: 0 auto;
    padding: 20px;
    background-color: ${props => props.theme.background};


  

    p {
        margin-inline-start: 40px;
        color: ${props => props.theme.active};
        cursor: pointer;
    }

    img {
        scale: .8;
        transform: scale(80%);
        margin-inline-start: 10px;
    }
    img:hover {
        cursor: pointer;
    }

    input[type=checkbox]{
        position: absolute;
        -webkit-postion: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        cursor: pointer;
        margin: 0 18px;
        appearance: none;
        -webkit-appearance: none;
        border: 1px solid ${props => props.theme.border};
        border-radius: 15px;
    }

    

    input[type=checkbox]:checked {
        background: linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%));
        border: none;
    }

    input[type=checkbox]:checked + p {
        text-decoration: line-through;
        color: ${props => props.theme.disabled};
    }

    input[type=checkbox]:checked::before {
        position: absolute;
        content: url(${checked});
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    &:hover input:not([type=checkbox]:checked){
        border: 1px solid transparent;
        background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
        
    }

    @media (min-width: 425px){
        input[type=checkbox]{
            height: 30px;
            width: 30px;
            margin: 0 25px;
        }

        p {
            margin-inline-start: 60px;
        }

        img {
            transform: scale(100%);
        }
    }
`