import "../../../styles/block/About.css"

import face from "../../../../img/face.jpg"

function About() {
  return(
    <div>
     <div className="about">
      <h1 className="title">About Me</h1>
      <div className="site-about">
       <div className="face"><img src={face}></img></div>
       <div className="aboutContent">
       <h2 className="about_name">横山 奏人</h2>
       <p>2001年5月29日生まれ 大阪府出身</p>
       <p>大阪経済大学 経済学部 3年生</p>
       <p>中学・高校はともにサッカー部に所属。</p>
       <p>HTML/CSSはProgate、ドットインストールを用いて学習し、JavaScriptとReactは書籍で独学中
       </p>
       <p>趣味は読書、アニメ・映画鑑賞、筋トレ、一人旅、スノーボード</p>
       <p >インターンを通して、実践的なプログラミングスキルを身に着けたいと考えております！</p>
       </div>
     </div> 
      </div>
    </div>
  )
 }
 
 export default About