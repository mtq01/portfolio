import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import MainContent from './components/main/MainContent';
import './App.css'
import { useEffect } from 'react';

function App() {

  // dynamic page title
    useEffect(() => {
    document.title = `emburr`;
  }, []);

  return (
      <div className="base-grid">
          <Nav />
          <Header />
          <MainContent />
      </div>
  )
}

export default App
