import React from 'react';
import logo from './logo.svg';
import snow from './snow.jpg'
import owl from './owl.jpg'
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <br />
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src={snow} />
        </div>
        <div>
          <img src={owl} />
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
