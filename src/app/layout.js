"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
// import { ThemeProvider } from '@mui/material/styles';
// import theme from "@/app/styles/theme";
import { AppContext } from '@/components/AppContext/AppContext';
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Tradein",
//   description: "Gamified Virtual Trading App",
// };

export default function RootLayout({ children }) {
  const [theme, settheme] = useState("dark");
  return (
    <AppContext.Provider value={{ theme, settheme }}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
        <title>Tradein - Fintech Education App</title>
        <meta name="description" content="Tradein is a leading Fintech education app that offers virtual trading competitions and learning resources to improve your trading skills. Join our competition and start trading today!"/>
        <meta name="keywords" content="Tradein, Fintech, Education, App, Trading, Competition, Virtual Trading, Learning Resources"/>
        <meta name="author" content="Raj Rawariya, Atul Singh, Harsh Khandelwal, Ssaksham Jain"/>
        <meta name="robots" content="index, follow"/>
      </head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AppContext.Provider>
  );
}

// components/Layout.js
// import React from 'react';
// import theme from '../styles/theme';
// import theme from "@/app/styles/theme";

// Import Inter font
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// const metadata = {
//   title: 'Tradein',
//   description: 'Gamified Virtual Trading App',
// };

// const Layout = ({ children }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <html lang="en">
//         <head>
          {/* Include Inter font */}
          {/* <link rel="stylesheet" href={inter}></link> */}
//         </head>
//         <body className={inter.className}>
//           {children}
//         </body>
//       </html>
//     </ThemeProvider>
//   );
// };

// export { metadata };
// export default Layout;

