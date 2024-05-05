import { useState } from 'react'
import './index.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <p className='name'>Hello</p> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
