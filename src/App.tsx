import { Layout } from 'containers';
import { Error404, Home } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
