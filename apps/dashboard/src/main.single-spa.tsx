import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './app/app'; 
import { BrowserRouter } from 'react-router-dom';
declare global {
  interface Window {
    singleSpaNavigate?: boolean;
  }
}

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: () => (
    <BrowserRouter basename='/'>
         <App />
     </BrowserRouter>
  ),
  errorBoundary(err, info, props) {
    return <div>Error in Dashboard MFE</div>;
  },
});

if (!window.singleSpaNavigate) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOMClient.createRoot(rootElement);
    root.render(
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    );
  }
}

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
 