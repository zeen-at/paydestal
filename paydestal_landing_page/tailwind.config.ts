

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontfamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        'withPaydestal': "url('assets/background.png')",
        'footerbg': "url('assets/footerbg.png')",
      },

    },
  },
  plugins: [],
};

