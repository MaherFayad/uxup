// /pages/404.js
import Layout from '../../Components/Layout/Layout';
import ButtonComponent from "../../Components/Sections/Home/ButtonComponent";
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push('/');
  };

  return (
    <Layout title="404" description="Page Not found">
      <div className="Container404">
        <div className="spacer404"></div>
        <div className="bar">
          <div className="ball"></div>
        </div>
        <h1 className="text-gradient uxup-fs-h2 fw-bold">
          <br /> Go back to where the magic happens.
        </h1>
        <h3 className="fw-normal uxup-color-text-50 uxup-fs-paragraph my-4">
          We couldn't find the page you were looking for. But don't worry, our team is great at finding creative solutions—and we'll help you get back on track.
        </h3>
        <ButtonComponent
          id="learn-more"
          type="primary"
          text="Back to home"
          onClick={handleNavigateHome}
          isDisable={false}
          showLoading={false}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
