import "../../../styles/block/Top.css"

import topview from "../../../../img/top-view2.jpg"
import topview2 from "../../../../img/top-view3.jpg"

function Top(){
  return(
    <div className="top">
      <div className="top-view">
       <img className="top-view1" src={topview}></img>
       <img className="top-view2" src={topview2}></img>
      </div>
      <div className='msg' id="about">
     <h1>Welcome <br className="br"></br>to<br className="br"></br> Kanato's Site !</h1>
    </div>
    </div>
  )
}

export default Top;