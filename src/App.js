import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            <Login/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
