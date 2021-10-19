import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { Home } from './view';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
