import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation:{
        sampleAni:'toplefttoBottom 1s ',
        bigtosmol:'bigtosmol 1s'
      },
      keyframes:{
        toplefttoBottom:{
          '0%' : {transform:'translate(-10%,-10%)',opacity:'0'},
          '100%' : {transform:'translate(0,0)',opacity:'1'}
        },
        bigtosmol:{
          '0%':{transform:'scale(1.5)',opacity:'0'},
          '25%':{opacity:'0'},
          '100%':{transform:'scale(1)',opacity:'1'}
        }
      }
    },
  },
  plugins: [],
};
export default config;
