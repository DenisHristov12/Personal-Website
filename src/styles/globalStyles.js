import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {

--color-grey-50: #f9fafb;
--color-grey-100: #f3f4f6;
--color-grey-200: #e5e7eb;
--color-grey-300: #d1d5db;
--color-grey-400: #9ca3af;
--color-grey-500: #6b7280;
--color-grey-600: #4b5563;
--color-grey-700: #374151;
--color-grey-800: #1f2937;
--color-grey-900: #111827;

--color-main-100: #f0ffc2;
--color-main-200: #ebffad;
--color-main-300: #e6ff99;
--color-main-400: #e0ff85;
--color-main-500: #dbff70;
--color-main-600: #d6ff5c;

/* --color-main-700: #F5F5DC; */
/* --color-main-700: #FF00FF; */
/* --color-main-700: #E6E6FA; */
/* --color-main-700: #FFD700; */
/* --color-main-700: #FF7F50; */
--color-main-700: #ccff33;

--color-main-800: #b8e62e;
--color-main-900: #a3cc29;
--color-main-1000: #8fb324;
--color-main-2000: #7a991f;
--color-main-3000: #66801a;
--color-main-4000: #526614;

--color-accent-100: #ffcc33;


/* --color-main-100: #FFECB3;
--color-main-700: #FFD700; 
--color-main-800: #B29040;

--color-accent-100: #FF6347 ;
--color-accent-200: #8B4513 ; */



}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
 font-family: 'Rubik', sans-serif;

  line-height: 1.5;

overflow: hidden;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  
}

ul {
  list-style: none;
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
`;

export default GlobalStyles;

// - FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
