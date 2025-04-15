const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { base } = require('daisyui/imports');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
        serif: ['Inter var', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1.3rem",
        xl: "1.55rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  // Configuração do DaisyUI
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: "white",
          'primary-content': "#F6F6f6",
          neutral: "#E8E8E8",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root'
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
};