import backgroundLight from './images/bg-desktop-light.jpg';
import backgroundDark from './images/bg-desktop-dark.jpg';

export const lightTheme = {
    body: 'hsl(236, 33%, 92%)',
    background: 'hsl(0, 0%, 98%)',
    bg: `url(${backgroundLight})`,
    color: 'hsl(235, 19%, 35%)',
    border: 'hsl(233, 11%, 84%)',
    active: 'hsl(235, 19%, 35%)',
    disabled: 'hsl(233, 11%, 84%)',
    count: 'hsl(236, 9%, 61%)',
    boxshadow: 'hsl(234, 11%, 52%)'
}

export const darkTheme = {
    body: 'hsl(235, 21%, 11%)',
    background: 'hsl(235, 24%, 19%)',
    bg: `url(${backgroundDark})`,
    color: 'hsl(234, 11%, 52%)',
    border: 'hsl(234, 11%, 52%)',
    active:' hsl(234, 39%, 85%)',
    disabled: 'hsl(234, 11%, 52%)',
    count: 'hsl(234, 11%, 52%)',
    boxshadow: 'hsl(0,0%,0%)'
}