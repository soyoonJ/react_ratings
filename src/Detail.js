import React from "react";
import {useHistory} from "react-router-dom";
import Home from './Home';
import {useParams } from "react-router-dom"

const Detail = (props) => {
    const history = useHistory();
    const day_lists = props.list
    const day_name = useParams();
//switch문 써서 '내 일주일은?' 삭제하기
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
        <div className="weekSummary">
            <div className="makeCircle"></div>
            <div className="makeCircle"></div>
            <div className="makeCircle"></div>
            <div className="makeCircle"></div>
            <div className="makeCircle"></div>
        </div>
        <div>
            <button className="btnStyle" onClick={()=>{
                history.push("/")
            }}>평점 남기기</button>
        </div>
        </>
    )
}


// 서브 연결하는거 - 버킷리스트 map/push 부분 참고
export default Detail;