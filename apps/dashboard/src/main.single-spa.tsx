import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './app/app'; 
import { BrowserRouter } from 'react-router-dom';
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

export const { bootstrap, mount, unmount } = lifecycles;
 