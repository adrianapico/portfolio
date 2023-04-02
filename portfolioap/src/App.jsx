import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import	Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = ()=> {
  return (
    <>
      <Sidebar />
      <main className='main'>
          <Home />
          <About />
          <Resume />
          <Projects />
          <Contact />
      </main>
    </>
  )
}

export default App
