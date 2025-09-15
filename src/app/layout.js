import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
          </WishlistProvider>
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
