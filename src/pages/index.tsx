// pages/index.tsx
import Layout from "../../Components/Layout/Layout";
import HeroBanner from '../../Components/Layout/HeroBanner'; // Corrected the import path


export default function Home() {

  return (
      <Layout title="Home" description="Redefining Digital Experiences">
        <HeroBanner />
      </Layout>
  );
}
