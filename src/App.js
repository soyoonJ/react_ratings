import React from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';
import Home from './Home';
import Detail from './Detail';
import NotFound from "./NotFound";
import './style.css';


// 월~일까지를 usdState 사용해서 만들어주고, 자식 컴포넌트로 보내줌. Home/Detail에서 둘 다 사용하고자 App.js에서 만들어줌
function App() {
  const [list, setList] = React.useState(["월", "화", "수", "목", "금", "토", "일"]);
  

  return (
    <div className="App">
      <div className="mainBox">

      {/* NotFound 사용하기 위해 Switch 사용 - 해당 값이 없을 경우 NotFound로 이동 */}
      <Switch>
        {/* App.js에서 만들어 준 list를 render 사용해서 자식 컴포넌트로 넘겨줌 */}
        <Route path="/" exact render={(props) => <Home list={list} />} />
        {/* Home.js에서 삼각형 클릭 시 history.push로 인해 :index에 값이 들어옴 */}
        <Route path="/detail/:index" component={Detail} render={(props) => <Detail list={list} />} />
        {/* 이상한 주소 넘겨줬을 때 이상한 페이지라고 알럿창 띄우는 페이지로 넘기기 */}
        <Route component={NotFound} />
      </Switch>

      </div>
    </div>
  );
}



export default App;
