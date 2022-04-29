import "../../../styles/block/About.css"

import face from "../../../../img/face.jpg"
import {Scroll} from "../atoms/ScrollReveal"

function About() {
  return(
    <div>
      <div id="about"></div>
     <div className="about">
      <Scroll>
        <h1 className="title" >About Me</h1>
      </Scroll>
      <Scroll>

          <div className="site-about">
          <div className="face"><img src={face}></img></div>
          <div className="aboutContent">
          <h2 className="about_name">横山 奏人<span className="small_name">（よこやま かなと）</span></h2>
          <p>2001年5月29日生まれ 大阪府出身</p>
          <p>大阪経済大学 経済学部 3年生</p>
          <p>2021年1月からProgateとドットインストールを用いてHTML/CSSの学習を開始<br/>現在は主にJavaScriptとReactを書籍で学習中
          </p>
          <p>将来的にはサーバーサイドの知識もあるエンジニアになりたいです。</p> 
          <p >実務経験がないため、インターン活動を通して実践的なプログラミングスキルを身に着けさせていただきたいと考えております！</p>
          </div>
        </div> 
      </Scroll>
      </div>
    </div>
  )
 }
 
 export default About