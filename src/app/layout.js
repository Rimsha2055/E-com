import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          <CartProvider>
            <Navbar />
            <main className="p-6">{children}</main>
          </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
