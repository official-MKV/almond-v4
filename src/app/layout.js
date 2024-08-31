import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AlmondNavbar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Almond Nigeria",
  description: "The everything finance app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 w-screen h-[60px] z-50">
          <AlmondNavbar />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
