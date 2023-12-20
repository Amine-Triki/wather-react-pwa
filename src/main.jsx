import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { useRegisterSW } from 'virtual:pwa-register/react';  // استيراد useRegisterSW

const MyRootComponent = () => {
  const { needRefresh, offlineReady, updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    updateServiceWorker();
  }, []);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default MyRootComponent;  

