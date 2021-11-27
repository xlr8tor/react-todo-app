import styled from "styled-components";


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
    margin: 0 auto;
    padding: 20px;

    span {
        font-size: 13px;
        color: ${props => props.theme.count}
    }

    .all,
    .active,
    .completed,
    .clear {
        color: ${props => props.theme.count}
    }

    .all,
    .active,
    .completed {
        display: none;
    }

    .all:hover,
    .active:hover,
    .completed:hover,
    .clear:hover {
        color: ${props => props.theme.active}
    }

    .clear {
        font-weight: 400;
    }

    @media (min-width: 425px){
        .all,
        .active,
        .completed {
            display: inline;
        }
    }
    

`;

export const Button = styled.button`
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    font-weight: 700; 
    cursor: pointer;

    &.Active {
        color: hsl(220, 98%, 61%);
    }

    &.Active:hover {
        color: hsl(220, 98%, 61%);
    }
`;