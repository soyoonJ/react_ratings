import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"
import styled from "styled-components";


const Detail = (props) => {
    // 페이지 전환하기 위해 useHistory 가져오기
    const history = useHistory();
    // 파라미터 값 가져오기
    const day_name = useParams();
    // 동그라미 태그 가져오기 위해 useRef 사용
    const rating = React.useRef(null);
    // map 돌리기 위해서 임의로 지정해준 배열. Array(5).fill(0)으로 해서 넣어줘도 괜찮겠더라!
    const array = [0,1,2,3,4];
    // count의 초기값 처음에 0으로 생성해주었으나, 초기값 때문에 페이지 로딩 시 동그라미 색칠된 채로 랜더링 됨.
    // null이나 빈칸으로 남겨두면 원하는대로 초기값 없이 출력됨
    const [count, setCount] = React.useState();

    // 평점 주는 다른 방법 시도
    // const circle_count = Array.from({ length:count }, (v, i) => i);
    // const ClickRating = (index) => {

    //     const [clicked, setClicked] = useState([false, false, false, false, false]);
    //     const targetCircle = [...clicked]
        
    //     for(let i=0; i<5; i++) {
    //         targetCircle[i] <= index? true:false;
    //     }
    //     setClicked(targetCircle);

    //     // clickedCircle.current.style.backgroundColor = "yellow"  
    // }

    // React.useEffect(() => {
    //     clickedCircle.current.addEventListener("click", clickEvent)
        

// }, []);

    // window.setTimeout(()=>{},1000);
    // console.log(rating);

    return (
        <>
        <div className="detailSubTitle">
            {/* 요일에만 블럭 씌워주기 위해 span 태그로 묶어 스타일 지정 */}
            <span style={{
                backgroundColor: "pink",
                borderRadius: "5px",
                padding: "5px",
                color: "white",
                // useParams()를 통해 파라미터 object 가져오고 그 중에서 index로 저장된 value값 가져오기
            }}>{day_name.index}요일</span> 평점 남기기
        </div>
        {/* 코드 상단 useRef에 태그 보내주기 위해 ref 넣어주기 */}
        <div ref={rating} className="weekSummary">
            {array.map((el, i)=> {
                    return (
                    <div className="makeCircle"
                    style={{
                        // 삼항연산자를 활용하여 배경값 변경해주기
                        // i가 0부터 시작하기 때문에 i<=count 하거나 i<count+1로 비교한다
                        background:(i<count+1)?"yellow":"#ddd"
                    }}
                    key={i}
                    onClick={()=> {
                        // 클릭하면 i값을 count에 보내주기 -> 클릭한 값 특정 짓기 위함
                        setCount(i)
                    }}></div>
                        // const target_circle = document.getElementsByClassName('makeCircle');
                        // const target_id = target_circle[i].getAttribute('id')
                        
                        // array2.map((el, idx)=> {
                        //     return (
                        //         (idx <= target_id) ? (target_circle[i].className = "yellowCircle") : (target_circle[i].className = "makeCircle")
                        //     )
                        //   } )
                        
                        // // target_circle.className = "yellowCircle"
                        // console.log(target_circle[i].className)
                        // console.log(target_id)
                        // console.log(target_circle)
                        // console.log(target_circle.className)
                        
                        // for (let i=0; i<5; i++) {
                        //     (i <= target_id) ? 노란색 : 회색
                        // }
                        

                    
                    )
                } )}

        </div>
        <div>
            {/* 평점 남기기 버튼 클릭 시 메인 페이지로 가도록 usehistory 사용해서 push 해줌 */}
            <button className="btnStyle" onClick={()=>{
                history.push("/")
            }}>평점 남기기</button>
        </div>
        </>
    )
}

// const rating = styled.div `
	
// 	background-color: ${(props)=>(props.bg_color? "yello" : "#ddd")};
// `;




// 서브 연결하는거 - 버킷리스트 map/push 부분 참고
export default Detail;