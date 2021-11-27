import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.background};
    box-shadow: 2px 2px 20px ${props => props.theme.boxshadow};
    border-radius: 6px;
    margin-block-end: 2em;

    @media (min-width: 425px){
        display: none;
    }
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    
    .active {
        padding-inline: 1em 1em;
    }


    .all,
    .active,
    .completed {
        color: ${props => props.theme.count}
    }

    .all,
    .active,
    .completed {
        display: inline;
    }

    .all:hover,
    .active:hover,
    .completed:hover {
        color: ${props => props.theme.active}
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