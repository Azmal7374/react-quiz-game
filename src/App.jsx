import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import LoginScreen from './page/LoginScreen';
import { AuthProvider } from './Authentication/AuthContext';
import Result from './components/Result';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/result" element={ <Result></Result>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;