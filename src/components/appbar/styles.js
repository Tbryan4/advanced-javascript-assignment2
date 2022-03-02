// imsc shortcut

import styled from 'styled-components';

//exsc
const AppBarStyles = styled.div `
    width: 100%;
    padding: 0.2rem;
    background-color: red;
`;

const AppBarItems = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItemGroup = styled.li `
    list-style-type: none;
`;

const AppBarItem = styled.li `
    list-style-type: none;
    font-weight: bold;
    text-shadow: 0px 0px 2px grey;
`;





export {AppBarItems,AppBarItemGroup,AppBarItem,AppBarStyles}

