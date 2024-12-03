import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from '../../providers/ToastProvider';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
