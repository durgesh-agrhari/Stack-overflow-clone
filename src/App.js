import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
//import Avater from './components/Avatar/Avater'
//import Button from './components/Button/Button'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        {/* <Button />
        <Avater /> */}
      </Router>
    </div>
  );
}

export default App;
