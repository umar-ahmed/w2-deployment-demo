import logo from './webdev-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>U of T Web Dev Club</h3>
        <div class="socials">
          <a href="https://www.facebook.com/uoftweb"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/uoftwebdevclub/"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/uoftweb"><i class="fab fa-github"></i></a>
          <a href="https://discord.gg/M8RQVSRctH"><i class="fab fa-discord"></i></a>
          <a href="mailto:uoftwebdevclub@gmail.com"><i class="far fa-envelope"></i></a>
        </div>
      </header>
    </div>
  );
}

export default App;
