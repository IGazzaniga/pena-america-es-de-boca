import React from 'react';
import './App.css';
import Menu from './components/Navbar/navbar'
import Footer from './components/Footer/footer';
import Banner from './components/Banner/banner'
import Us from './components/Us/us';
import Work from './components/Work/work';
import Join from './components/Join/join';
import News from './components/News/news';
import Place from './components/Place/place'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      {/* <News/> */}
      <Us/>
      <Place/>
      <Work/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
