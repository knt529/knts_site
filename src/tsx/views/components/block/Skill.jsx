import Content from "../atoms/Content"

import "../../../styles/block/Skill.css"
import {Scroll} from "../atoms/ScrollReveal"

function Skill() {
  return( 
    <div>
    <div id="skills"></div>
    <div className="skills">
      <Scroll>
      <h1 className="title" >Web Skills</h1>
      </Scroll>
        <Scroll>
      <div className="skill">
          
        <div className="language">
           <h1>Language</h1>
             <div className="skill_contents">
               <section>
               <Content
                 name="HTML/CSS"
                 text={
                   <div>
                     <p>学習期間 1年3ヶ月</p>
                     <p>基本的なコーディングであれば可能です。<br/>Bootstrapやicooon-mono等の利用も可能です。</p>
                   </div>
                }
               />
               </section>
               <section>
               <Content
                 name="JavaScript"
                 text={
                   <div>
                    <p>学習期間 7ヶ月</p>
                    <p>基礎レベルですが、QiitaやGithub等を活用して機能を実装していくことが可能です。</p>
                  </div>
               }
               />
               </section>  
             </div>
        </div>
        <div className="library_tool">   
            <h1>Library&Tool</h1>
             <div className="skill_contents">
               <section className="react">
               <Content
                 name="React"
                 text={
                  <div>
                    <p>学習期間 5ヶ月</p>
                    <p>コンポーネントやprops、useState等を用いてWebサイトの作成ができるレベルです。</p>
                  </div>
               }
               />
               </section>
               <section>
               <Content
                 name="Git/Github"
                 text={
                  <div>
                    <p>学習期間 1週間</p>
                    <p>インターンに向けて学習を開始しました。<br/>これから本格的に習得していきたいと考えております。</p>
                  </div>
               }
               />
               </section>  
             </div>
         </div>
      </div>
        </Scroll>
    </div>
    </div>
  )
 }
 
 export default Skill