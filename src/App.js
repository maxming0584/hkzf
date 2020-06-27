import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      {/* 配置路由规则 */}
      <Route path="/home" component={()=>(<Home/>)}></Route>
      <Route path="/city" component={()=>(<City/>)}></Route>
      <Route path="/map" component={()=>(<Map/>)}></Route>
    </Router>
  );
}

export default App;
