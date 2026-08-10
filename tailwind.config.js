/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      keyframes: {
        // Keyframes for scrolling images (for mobile devices)
        scrollImagesMobile: {
          '0%': { transform: 'translateX(0%)' }, // Start from the right
          '100%': { transform: 'translateX(-100%)' }, // Move left
          // '20%': { transform: 'translateX(-300%)' }, // Move more left
          // '30%': { transform: 'translateX(-500%)' }, // Continue left
          // '40%': { transform: 'translateX(-700%)' }, // End on the left
        },

        // Keyframes for scrolling images (for desktop devices)
        scrollImagesDesktop: {
          '0%': { transform: 'translateX(0%)' }, // Start from the right
          '100%': { transform: 'translateX(-500%)' }, // End on the left
        },

        // Keyframes for scrolling text
        scrollText: {
          '0%': { transform: 'translateX(10%)' }, // Start from the right
          '100%': { transform: 'translateX(-100%)' }, // End on the left
        },
      },
      animation: {
        // Apply the correct animations based on screen size
        scrollImagesDesktop: 'scrollImagesDesktop 6s linear infinite', // 7 seconds for desktop
        scrollImagesMobile: 'scrollImagesMobile 5s linear infinite', // 10 seconds for mobile
        scrollText: 'scrollText 40s linear infinite', // 40 seconds for scrolling text
      },
    },
  },

  plugins: [
    flowbitePlugin(),
    tailwindScrollbar(),
  ],
};




// /** @type {import('tailwindcss').Config} */
// import flowbitePlugin from 'flowbite/plugin';
// import tailwindScrollbar from 'tailwind-scrollbar';

// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//   ],
  
//   theme: {
//     extend: {
//       keyframes: {
//         scrollImages: {
//           '0%': { transform: 'translateX(50%)' }, // Start from the right
//           '100%': { transform: 'translateX(-100%)' }, // End on the left
//         },
//         // Adding the scrolling text animation
//         scrollText: {
//           '0%': { transform: 'translateX(10%)' }, // Start from the right
//           '100%': { transform: 'translateX(-100%)' }, // End on the left
//         },
//       },
//       animation: {
//         scrollImages: 'scrollImages 5s linear infinite', // Apply animation for image scrolling
//         // Adding the scrollText animation for the scrolling text
//         scrollText: 'scrollText 40s linear infinite', // 20 seconds for smooth scrolling
//       },
//     },
//   },

//   plugins: [
//     flowbitePlugin(),
//     tailwindScrollbar(),
//   ],
// };



