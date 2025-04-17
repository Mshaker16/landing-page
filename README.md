# 🏡 Egyptian Hotels Landing Page

A responsive and modern landing page built with React and Chakra UI and Tailwind CSS — designed to showcase curated hotels across Egypt. The page adapts seamlessly to desktop and mobile devices, ensuring a smooth user experience everywhere.

---

## 🚀 Features

- 🌍 Personalized greeting for logged-in users.
- 📸 Fullscreen hero section with background image.
- 🔥 Fully responsive layout using Chakra UI's `useMediaQuery`.
- 🏨 Interactive Booking Bar for hotel searches.
- 💡 Clean component-based architecture.
- ⚡️ Optimized for both desktop and mobile.

---

## 🧱 Tech Stack

- [React](https://react.dev/) — Frontend JavaScript Framework  
- [Chakra UI](https://chakra-ui.com/) — Modern Component Library  
- [Tailwind CSS](https://tailwindcss.com/) — Utility-First CSS Framework 
- [React Icons](https://react-icons.github.io/react-icons/) — Icon Pack  

## Project Structure:
landing-Page/
├── public/ # Static assets
│ └── favicon.ico # Site favicon
├── src/
│ ├── components/ # Reusable components
│ │ ├── Navbar/ # Navigation components
│ │ ├── finalpage/ # final part of the page
│ │ └── small_navbar/ # moblie-view of the navbar
│ │ └── Travelpage/ # Travel areas cards
│ │ └── Bookingbar/ # Booking actions and ui/ux
│ ├── pages/ # Sub-main containing all components
│ ├── layout.jsx # Main app component
├── .gitignore
├── package.json
├── README.md
└── tailwaind.config.js
└── next.config.mjs
└── postcss.config.mjs



## 💻 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mshaker16/landing-page.git
   cd landing-page

2. Install dependencies:
   npm install

3. Set up Tailwind CSS:
   npx tailwindcss init -p

4. Run the development server:
   npm run dev

5. Open your browser to:
   http://localhost:3000


🖼️ Responsive Design
This project uses both:

🌟 useMediaQuery from Chakra UI to handle layout shifts.

💡 Tailwind utility classes for fine-grained control (margins, paddings, fonts, breakpoints).

💡 Customization
Replace HeroBG.png with your preferred hero image.

Customize breakpoints in Tailwind config or adjust useMediaQuery logic in HomePage.js.

Replace text and hotel data in TravelPage.js and FinalPage.js.

🔒 Authentication Placeholder
This landing page simulates login status with a isLoggedIn flag which is statically active when log in or sign up is pressed


📝 License
This project is open-source and available under the MIT License.
