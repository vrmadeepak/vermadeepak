import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="" alt="brand" />
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">School</a>
          <a href="">Art</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <h1>VERMADEEPAK.IN</h1>
            <p>Hello! My name is Deepak Verma, and I'm a freelance web developer and a teacher from New Delhi, India. I am not freelancing at some of the finest agencies, I'm working remotely on projects for clients around New Delhi and Pune.</p>
            <p>I have a diverse set of skills ranging from design, to HTML + CSS + JavaScript and React, all the way to PHP and Python.</p>
            <button>Learn More</button>
          </div>
          <div>
            <img src="" alt="My Photo" />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">fb insta twitter linkedin</div>
        <div className="footer-bottom">copyright</div>
      </footer>
    </div>
  );
}

export default App;
