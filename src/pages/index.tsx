import Layout from '../../Components/Layout/Layout';
import HeroBanner from '../../Components/Layout/HeroBanner';
import Carousel from '../../Components/Layout/Carousel';
import DigitalFutureComponent from '../../Components/Layout/DigitalFutureComponent';
import DesignInspirationComponent from '../../Components/Layout/DesignInspirationComponent';


export default function Home() {
  return (
    <Layout title="Home" description="Redefining Digital Experiences">
      <HeroBanner />
      <Carousel />
      <DigitalFutureComponent />
      <DesignInspirationComponent />
    </Layout>
  );
}
