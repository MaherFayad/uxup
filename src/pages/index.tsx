import Layout from '../../Components/Layout/Layout';
import HeroBanner from '../../Components/Layout/HeroBanner';
import DigitalFutureComponent from '../../Components/Layout/DigitalFutureComponent';

export default function Home() {
  return (
    <Layout title="Home" description="Redefining Digital Experiences">
      <HeroBanner />
      <DigitalFutureComponent />
    </Layout>
  );
}
