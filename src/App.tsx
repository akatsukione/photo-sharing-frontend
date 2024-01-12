import { LayoutComponent } from 'components/Layout';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteComponent } from 'routes';

export const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(true);
  return (
    <>
      <BrowserRouter>
        <LayoutComponent
          isAuthenticated={isAuthenticated}
          setAuthentication={setAuthentication}
        >
          <RouteComponent
            isAuthenticated={isAuthenticated}
            setAuthentication={setAuthentication}
          />
        </LayoutComponent>
      </BrowserRouter>
    </>
  );
};
