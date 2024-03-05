import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */

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

--color-yellow-50: #fefce8;
--color-yellow-100: #fef9c3;
--color-yellow-200: #fef08a;
--color-yellow-300: #fde047;
--color-yellow-400: #facc15;
--color-yellow-500: #eab308;
--color-yellow-600: #ca8a04;
--color-yellow-700: #a16207;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

 
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  
}

body {
 background-image: linear-gradient(to right, #434343 0%, black 100%);
 font-family: 'Rubik', sans-serif;


  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  /* font-size: 1.8rem; */
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

button:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
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
  hyphens: auto;
}


--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;



--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;


`;

export default GlobalStyles;

// - FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
