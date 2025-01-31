import React from 'react';
import Header from './components/Header';
import About from './components/About'; 
// import Footer from './components/Footer';
import Menu from './components/Menu';
import Loader from './components/Loader';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';

// App.jsx
function App() {
  return (
    <div className="container">
      {/* Corner borders */}
      <div className="corner-border corner-top-left"></div>
      <div className="corner-border corner-top-right"></div>
      <div className="corner-border corner-bottom-left"></div>
      <div className="corner-border corner-bottom-right"></div>
      
      {/* Your existing components */}
      <Header />
      <Menu />
      <About />
      <Inspo />
      <Viewfinder />
      <Loader />
      {/* <Footer />  */}
    </div>
  );
}

export default App;