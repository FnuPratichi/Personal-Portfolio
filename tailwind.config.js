// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite', // 👈 Add this
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: { // 👈 Add this
          
          '50%': {
            textShadow: '0 0 16px #facc15, 0 0 24px #facc15',
          },
        },
      },
    },
  },
  plugins: [],
}
