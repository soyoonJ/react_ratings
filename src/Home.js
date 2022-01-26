import React from "react";
import {useHistory} from "react-router-dom";

const Home = (props) => {
const history = useHistory();
// props에서 값 받아와서 day_lists로 저장
const day_lists = props.list

// 임의로 array 배정 - row로 찍히는 동그라미 만들어주는 map에서 사용
const array = [0,1,2,3,4];

// index로 length가 7인 배열 만들어줌. row 한 줄 만들어진 걸 map으로 7번 돌려주기 위함
const circle_count = Array.from({ length: 7 }, (v, i) => i);


  return (
    <div>
      <h2>내 일주일은?</h2>
      {/* row를 7번 반복해서 페이지에 찍어줌 */}
      {circle_count.map((num, idx) => {
        // randomNum을 return 밖에다 쓰면 동그라미 각각 랜덤값이 들어감. 5개를 기준으로 7번만 돌리기 위해 중간에다가 쓴 것임.
        const randomNum = Math.floor(Math.random() * 5)
        return (
            <div className="weekSummary" key={idx}>
              {/* day_lists의 인덱스 값에 따라 텍스트 넣어주기*/}
              <p className="mainFont">{day_lists[idx]}</p>
              {/* 동그라미 한 줄에 5개 찍어내기
              기존에는 5개 다 적고 map 돌렸지만 5개도 map으로 그려줘도 됨*/}
              {array.map((el, i)=> {
                return (
                  <div className="makeCircle" 
                  style={{
                    // 위에서 뽑아준 random값을 비교값으로 넣고, i가 이보다 작으면 yellow로 찍어주기.
                    backgroundColor:(i<=randomNum)?"yellow":"#ddd"
                  }}
                  key={i}></div>
                )
              } )}
              {/* 삼각형 클릭 시 history.push를 이용해서 주소값 넣어주기 -> App.js에서 :index값 읽는 것이 가능해짐. */}
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