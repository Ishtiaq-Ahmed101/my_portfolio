import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       bg_primary: '#7e4ae8',
       bg_primarylight: '#cab5f8',
       bg_primary2: '#0f0716',
       bg_primary3: '#140b1c',
       bg_black: '#060709',
       bg_white: '#fdfdfd',
       bg_background:'#241149',
       bg_primary4:"#7e4ae8",
      },
    },
  },
  plugins: [],
};
export default config;
