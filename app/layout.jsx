import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { sora } from "@/public/fonts/font";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "@/styles/globals.css";
import CartProvider from "@/context/CartContext";
export const metadata = {
  title: "Libreria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={sora.className}>
      <div>

      
        <CartProvider>
          <header>
            <NavigationBar />
          </header>
          <main >{children}</main>
        </CartProvider>
          
        </div>  
        <Footer />
    
      </body>
    </html>
  );
}
