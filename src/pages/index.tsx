import Layout from '../../Components/Layout/Layout';
import HeroBanner from '../../Components/Sections/Home/HeroBanner';
import Carousel from '../../Components/Sections/Home/Carousel';
import DigitalFutureComponent from '../../Components/Sections/Home/DigitalFutureComponent';
import DesignInspirationComponent from '../../Components/Sections/Home/DesignInspirationComponent';
import FetchAndDisplayData from '../../Mock/Projects';


export default function Home() {
  return (
    <Layout title="Home" description="Redefining Digital Experiences">
      <HeroBanner />
      <Carousel />
      <DigitalFutureComponent />
      <DesignInspirationComponent />
      <FetchAndDisplayData />
    </Layout>
  );
}
