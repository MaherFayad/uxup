// /pages/404.js
import Rive from '@rive-app/react-canvas';
import Layout from '../../Components/Layout/Layout';

const NotFound = () => (
  <Layout title="404" description="Page Not found">
    <Rive
      src="/404.riv"
      stateMachines="State Machine 1"
      style={{ width: '100vw', height: '100vh' }}
    />
  </Layout>
);

export default NotFound;
