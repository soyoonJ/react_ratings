import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"
import styled from "styled-components";


const Detail = (props) => {
    const history = useHistory();
    const day_lists = props.list
    const day_name = useParams();
    const rating = React.useRef(null);

    const array = [0,1,2,3,4];
    // const array2 = [0,1,2,3,4];
    
    const [count, setCount] = React.useState();
    const circle_count = Array.from({ length:count }, (v, i) => i);
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
            <span style={{
                backgroundColor: "orange",
                borderRadius: "5px",
                padding: "5px",
                color: "white",
            }}>{day_name.index}요일</span> 평점 남기기
        </div>
        <div ref={rating} className="weekSummary">
            {array.map((el, i)=> {
                    return (
                    <div className="makeCircle"
                    style={{
                        background:(i<count+1)?"yellow":"gray"
                    }}
                    key={i} id={i}
                    onClick={()=> {
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

            {/* <div className="makeCircle"></div>
            <div className="makeCircle"></div>
            <div className="makeCircle"></div>
            <div className="makeCircle"></div> */}
        </div>
        <div>
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