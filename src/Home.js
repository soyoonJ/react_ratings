import React from "react";
import {useHistory} from "react-router-dom";

const Home = (props) => {
const history = useHistory();
const day_lists = props.list
console.log(day_lists)

const circle_count = Array.from({ length: 7 }, (v, i) => i);

  // 반환할 리액트 요소가 없을 때는 null을 넘겨주세요!
  return (
    <div>
      <h2>내 일주일은?</h2>
      {circle_count.map((num, idx) => {
        return (
            <div className="weekSummary" key={idx}>
              <p>{day_lists[idx]}</p>
              <div className="makeCircle"></div>
              <div className="makeCircle"></div>
              <div className="makeCircle"></div>
              <div className="makeCircle"></div>
              <div className="makeCircle"></div>
              <div className="triangle" onClick={()=>{
                history.push('/detail/' + day_lists[idx]);
              }}></div>
            </div>
        );
      })}

  

    </div>
  );
};



export default Home;