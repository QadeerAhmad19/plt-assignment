import * as React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./styles.css";

import { Cart } from "./components/Cart";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
            <div className="App">            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
  );
};

export default App;
