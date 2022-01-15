import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        exact
        element={(
          <div>Home page</div>
        )}
      />
      <Route
        element={() => <h1>Page not found</h1>}
      />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
