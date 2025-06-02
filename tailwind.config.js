/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Added for completeness if using App Router convention
  ],
  theme: {
    extend: {
      colors: {
        'brand-charcoal': '#3A4750',     // Primary: Grounding neutrality, calm mystery
        'brand-cream': '#F0E6DA',        // Secondary: Warm, cozy background base
        'brand-gold': '#F6B352',         // Accent: Vibrant yet sophisticated pop ("Hue")
        'brand-light-gray': '#EAEAEA',
        'brand-medium-gray': '#7F8C8D',
        'brand-success': '#2ECC71',
        'brand-warning': '#F39C12',
        'brand-error': '#E74C3C',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],      // Primary: Modern, readable sans-serif
        display: ['Poppins', 'sans-serif'], // Secondary: Geometric, playful personality for headings
      },
      animation: {
        // 'logo-reveal': 'logoReveal 1.5s ease-out forwards', // Removed as logo is now static and this animation is no longer used in HeroSection
        'scroll-indicator-bounce': 'bounceY 2s infinite alternate ease-in-out',
        'pop-out': 'popOut 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        // logoReveal: { // Removed as logo-reveal animation is no longer used
        //   '0%': { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
        //   '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        // },
        bounceY: {
          '0%, 100%': { transform: 'translateY(-15%)' },
          '50%': { transform: 'translateY(0)' },
        },
        popOut: {
          '0%': { opacity: 0, transform: 'scale(0.3) rotate(-15deg)' },
          '100%': { opacity: 1, transform: 'scale(1) rotate(0deg)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      borderRadius: {
        'soft': '8px', // For a friendly, approachable feel
      },
    },
  },
  plugins: [],
};
