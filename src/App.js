import './App.scss';
import { ThemeToggleProvider } from './components/Theme/ThemeToggle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landingpage/Landing';
import PageLoader from './pages/PageLoader';

function App() {
  return (
    <ThemeToggleProvider>
      <div className="App">
      <PageLoader />
        <Router>
          <Routes>
            <Route path='/' element={<Landing/>} /> 
          </Routes>
        </Router>
      </div>
    </ThemeToggleProvider>
  );
}

export default App;
