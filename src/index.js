import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  // <ProSidebarProvider>
  <App />
  /* </ProSidebarProvider> */
  // </StrictMode>
);
