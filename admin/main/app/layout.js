"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

useEffect(() => {
      // website cursor
      const cursor = document.querySelector("#cursor");
      window.addEventListener("mousemove", (e) => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
      });
}, [])


  return (
    <html lang="en">
      <body className={inter.className}>
      <img id="cursor" src={"/assets/images/ERtcB0GWoAIpwU0.png"} alt="" />
        {children}
        </body>
    </html>
  );
}
