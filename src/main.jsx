import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const swPath = '/wather-react-pwa/service-worker.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
)

serviceWorkerRegistration.register(swPath);




