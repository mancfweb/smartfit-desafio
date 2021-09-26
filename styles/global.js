/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gotham';
        src: url('assets/fonts/Gotham-Bold.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('assets/fonts/Gotham-Black.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('assets/fonts/Gotham-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Book';
        src: url('assets/fonts/Gotham-Book.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    * {
        box-sizing: border-box;
    }

    html{
        margin:0;
        padding: 0;
        text-rendering: optimizeLegibility;
        font-smoothing: antialiased;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: ${theme.colors.white};
        font-family: ${theme.fonts.primary};
        line-height: 1.5rem;
        color: ${theme.colors.darkGrey};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fonts.secondary};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`
