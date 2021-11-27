import React from "react";
import { Wrapper } from "./Header.styles";
import iconLight from '../../images/icon-sun.svg';
import iconDark from '../../images/icon-moon.svg';

const Header = (props) => {
    return (
        <Wrapper>
            <h1>Todo</h1>
            <img 
                src={props.theme === 'light'? iconDark : iconLight}
                alt={'Icon'} 
                onClick = {() => {
                    props.themeToggler();
                }}
                />
        </Wrapper>
    )
}

export default Header;