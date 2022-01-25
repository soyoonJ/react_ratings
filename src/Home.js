import React from "react";
import {useHistory} from "react-router-dom";

const Home = (props) => {
const history = useHistory();
const day_lists = props.list
const array = [0,1,2,3,4];

const circle_count = Array.from({ length: 7 }, (v, i) => i);


  return (
    <div>
      <h2>내 일주일은?</h2>
      {circle_count.map((num, idx) => {
        const randomNum = Math.floor(Math.random() * 5)
        return (
            <div className="weekSummary" key={idx}>
              <p className="mainFont">{day_lists[idx]}</p>
              
              {array.map((el, i)=> {
                return (
                  <div className="makeCircle" 
                  style={{
                    backgroundColor:(i<=randomNum)?"yellow":"#ddd"
                  }}
                  key={i}></div>
                )
              } )}
{/*            
              <div className="makeCircle"></div>
              <div className="makeCircle"></div>
              <div className="makeCircle"></div>
              <div className="makeCircle"></div> */}
              <div className="triangle" onClick={()=>{
                history.push('/detail/' + day_lists[idx]);
              }}></div>
            </div>
        );
      })}

  

    </div>
  );
};



// 랜덤 const params = useParams(); Math.floor(Math.random() * (max - min) + min);

export default Home;