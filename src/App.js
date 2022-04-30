import logo from './logo.svg'
import './App.css'
import { Footer, Header } from 'components'
import { Resume, Works, About, Home } from 'sections'

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home/>
      <About/>
      <Resume/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
