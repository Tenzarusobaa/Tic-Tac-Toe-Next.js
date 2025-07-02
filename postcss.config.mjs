// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // If you are using PostCSS nesting
    tailwindcss: {
      // Tailwind CSS v4.0 configuration goes directly here
      // This is a simplified example based on early v4.0 docs
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            'tile-default': '#1C264B',
            'tile-x-place': '#204463',
            'tile-o-place': '#395C73',
            'board-background': '#36486C',
            'score-newgame-background': '#36486C',
          },
        },
      },
      // Other Tailwind v4.0 specific configurations like "jit" are often default or handled differently
    },
    autoprefixer: {},
  },
};