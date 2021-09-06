import * as React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./styles.css";

import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
            <div className="App">            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="*" component={NotFound} />
                  </Switch>
             </div>
       </BrowserRouter>
  );
};

export default App;
