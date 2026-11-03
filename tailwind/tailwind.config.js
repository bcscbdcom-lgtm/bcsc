// Builds assets/site.css. Rebuild after changing classes in any page:
//   npx tailwindcss@3.4.17 -c tailwind/tailwind.config.js -i tailwind/input.css -o assets/site.css --minify
module.exports = {
  content: ['./index.html', './erp/index.html', './privacy/index.html', './404.html'],
  theme: {
    extend: {
      colors: {
        navy: { 800: '#10244a', 900: '#0a1730', 950: '#060e1f' },
        accent: { 400: '#38bdf8', 500: '#1257d6', 600: '#0e46ad' },
      },
      fontFamily: {
        sans: ['Hind Siliguri', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
      },
    },
  },
};
