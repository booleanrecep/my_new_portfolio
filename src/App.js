import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

import { data } from "./data"
const { main, resume, portfolio } = data;

const App = () => {

  return (
    <div className="App">
      <Header {...main} />
      <About {...main} />
      <Resume {...resume} />
      <Portfolio {...portfolio} />
      <Footer {...main} />
    </div>
  )
}


export default App;
