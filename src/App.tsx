import React from 'react';
import { Layout } from 'containers';
import { Error404, Home, Login } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
