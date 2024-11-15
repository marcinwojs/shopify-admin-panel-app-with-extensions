import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius",
        width: "width",
      },
      colors: {
        mainBackgroundColor: "#f1f1f1",
        columnBackgroundColor: "#9b9a9a",
      },
    },
  },
  plugins: [],
} satisfies Config;
