import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Components/Topbar.js';
import routes from './Routes';

function App() {
  return (
  <Router>
    <TopBar/>
    {/* Add your shared layout components here */}
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  </Router>
  )
}

export default App;
