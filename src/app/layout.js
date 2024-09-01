import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AlmondNavbar from "@/components/NavBar";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Almond Nigeria",
  description:
    "Welcome to Almond,the cutting-edge fintech startup revolutionizing financial technology in Nigeria.As a pioneering force in the fintech sector,Almondis committed to delivering innovative solutions that enhance financial inclusion and drive economic growth.Our mission is to transform the financial landscape with advanced technologies and user-friendly applications tailored to the needs of Nigerian consumers and businesses. At Almond,we specialize in providing seamless digital financial services,including decentralized finance (DeFi) solutions,secure transactions,and efficient financial management tools.Our platform is designed to make banking more accessible,efficient,and transparent for everyone in Nigeria. Explore our website to discover how Almondis shaping the future of finance in Nigeria and beyond.Stay updated with the latest news,product releases,and insights into the fintech industry.Join us on our journey to revolutionize finance with innovative solutions that empower individuals and businesses alike. **Keywords:**Almondfintech,AlmondNigeria,financialtechnologystartup,DeFisolutions,digitalfinancialservicesNigeria,fintechinnovationNigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
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
