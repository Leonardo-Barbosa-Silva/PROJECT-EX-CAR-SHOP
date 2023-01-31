import Layout from './layout/indexLayout';
import Messages from './components/Messages';
import Pages from './pages/indexPages';


export default function App() {

  return (
    <Layout>
      <Messages />
      <Pages />
    </Layout>
  );
}
