import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {

    }

    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: .9rem;
        line-height: 1.5;

        & {
            @media (min-width: 375px){
                font-size: 1.125rem;

            }
        }
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        background-color: ${props => props.theme.body};
        background-image: ${props => props.theme.bg};
        background-repeat: no-repeat;
        transition: background-color .3s ease-in-out;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
`