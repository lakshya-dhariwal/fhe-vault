import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import '@/index.css';
import App from '@/App';

ReactDOM.render(
  <>
    <Helmet defaultTitle='FHE Vault' titleTemplate='%s | FHE Vault'>
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <App />
  </>,
  document.getElementById('root')
);
