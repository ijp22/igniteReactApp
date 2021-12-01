// React
import { Routes, Route } from 'react-router-dom';

// Components & Pages
import Home from './pages/Home';
import Nav from './components/Nav';

// Styles
import { GlobalStyle } from './components/GlobalStyles';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
