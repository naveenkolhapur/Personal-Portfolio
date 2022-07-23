import React from 'react';
import Topbar from './Components/Topbar';
import Intro from './Components/Intro';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Copyrights from './Components/Copyrights';

const App = () => {
  return (
    <>
      <Topbar />
      <Intro />
      <About />
      <Portfolio/>
      <Contact/>
      <Copyrights/>
    </>
  )
}

export default App