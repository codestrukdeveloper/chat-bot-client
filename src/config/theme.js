const { createGlobalStyle, ThemeProvider } = require("styled-components");

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

const CSSReset = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  input, button, textarea {
    outline: none;
    border: none;
    background: no-repeat;
    font-family: 'Poppins', sans-serif
  }

  textarea {
    resize: none
  }

  input, select, option, textarea {
    font-family: "Poppins", sans-serif
  }

  input, button, textarea, select {
    -webkit-tap-highlight-color: transparent;
  }
`;

const theme = {
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
  },
  colors: {
    "cb-purple": "#7B40F2",
    "cb-orange": "#FF9160",
    "cb-yellow": "#F4C426",
    "cb-gray": "#C4C4C4",
    "cb-black": "#000016",
    "cb-blue": "#3F8CFF",
    "cb-lightblue": "#3ACBE8",
    black: "#000000",
    white: "#FFFFFF",
    "cb-red": "#ED4C5C",
  },
  fontWeight: {
    bold: 700,
    "semi-bold": 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
};

const StyledComponentTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);

export default StyledComponentTheme;
