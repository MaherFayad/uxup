// pages/index.tsx
import Head from "next/head";
import localFont from "next/font/local";
import Layout from "../../Components/Layout/Layout";
import HeroBanner from '../../Components/Layout/HeroBanner'; // Corrected the import path

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Layout title="Home" description="Redefining Digital Experiences">
        <HeroBanner />
      </Layout>
    </>
  );
}
