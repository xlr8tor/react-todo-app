import styled from "styled-components";


export const Wrapper = styled.div`
    padding-block-start: 1.5rem;
    max-width: 600px;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    border-radius: 6px;
    background-color: ${props => props.theme.background};
    box-shadow: 0px 2px 20px ${props => props.theme.boxshadow};
    margin-block-end: 1em;

    div:nth-child(1) {
        border-radius: 6px 6px 0 0;
    }

    @media (min-width: 425px){
        margin-block-end: 2em;
    }

`
export const Paragraph = styled.div`
    width: 100%;

    p {
        text-align: center;
        color: ${props => props.theme.color}
    }
`;