
import NavBar from "@/components/NavBar";
import Image from 'next/image'
import Hero from "@/components/Hero.jsx";
import { sora } from "../public/fonts/font.js";
import heroImage from '../public/images/stock-photo-selective-focus-stack-books-wooden.jpg'
import "../styles/globals.css";
import Footer from "@/components/Footer.jsx";
export const metadata = {
  title: "Libreria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        <div className="heroWraper">
          <NavBar />
          <Hero/>
          <Image src={heroImage} className="imageOverlay" alt='overlay' />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
