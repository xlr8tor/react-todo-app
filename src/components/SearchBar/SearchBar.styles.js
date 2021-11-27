import styled from "styled-components";


export const Wrapper = styled.div`
    /* display: flex;
    align-items: center; */
    background: transparent;
`;

export const Content= styled.div`
    position: relative;
    max-width: 600px;
    width: 100%;
    height: 65px;
    background: ${props => props.theme.background};
    border-radius: 6px;


    input[type=text] {
        font-size: 18px;
        position: absolute;
        left: 0;
        margin: 10px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 45px;
        color: ${props => props.theme.color};

        :focus {
            outline: none;
        }
    }

    input[type=checkbox]{
        position: absolute;
        height: 20px;
        width: 20px;
        left: 0;
        cursor: pointer;
        margin: 20px 18px;
        appearance: none;
        --webkit-appearance: none;
        border: 1px solid ${props => props.theme.border};
        border-radius: 15px;
    }

    @media (min-width: 375px){
        input[type=checkbox]{
            height: 30px;
            width: 30px;
            margin: 15px 25px;
        }   

        input[type=text] {
            padding: 0 0 0 80px;
        }
    }
`;

