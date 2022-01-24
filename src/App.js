import React from "react";
import './App.css';
import Home from './Home';
import Detail from './Detail';
import NotFound from "./NotFound";
import './style.css';

import { Route, Switch } from "react-router-dom";


function App() {
  const [list, setList] = React.useState(["월", "화", "수", "목", "금", "토", "일"]);
  

  return (
    <div className="App">
      <div className="mainBox">
      <Switch>
        <Route path="/" exact render={(props) => <Home list={list} />} />
        <Route path="/detail/:index" component={Detail} render={(props) => <Detail list={list} />} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </div>
  );
}



export default App;
