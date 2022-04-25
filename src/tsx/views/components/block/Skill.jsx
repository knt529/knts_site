import Content from "../atoms/Content"

import "../../../styles/block/Skill.css"
import {Scroll} from "../atoms/ScrollReveal"

function Skill() {
  return( 
    <div className="skills" id="skills">
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
                     <p>基本的なコーディングであれば可能です。</p>
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
                    <p>複雑なコードを自分で一から考えてコーディングするのは難しいですが、QiitaやGithub等で公開されているサンプルコードを元に機能を追加していくことは可能です。</p>
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
                    <p>コンポーネントやprops、useStateを用いてWebサイトを作成できるレベルです。</p>
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
                    <p>インターンへ応募するにあたって学習を開始。<br/>これから本格的に習得していきたいと考えています。</p>
                  </div>
               }
               />
               </section>  
             </div>
         </div>
      </div>
        </Scroll>
    </div>
  )
 }
 
 export default Skill