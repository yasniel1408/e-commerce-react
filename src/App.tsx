import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>HOLAA</h1>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
