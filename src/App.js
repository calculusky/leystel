import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
       <div className="grid-container">
          <header>
            <Header/>
          </header>
          <main>
            
          </main>
          <footer></footer>
       </div>
    </BrowserRouter>
  );
}

export default App;
