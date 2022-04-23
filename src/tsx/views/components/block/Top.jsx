import "../../../styles/block/Top.css"

import topview from "../../../../img/top-view2.jpg"

function Top(){
  return(
    <div className="top">
      <div className="top-view">
       <img src={topview}></img>
      </div>
      <div className='msg' id="about">
     <h1>Welcome <br className="br"></br>to<br className="br"></br> Kanato's Site !</h1>
    </div>
    </div>
  )
}

export default Top;