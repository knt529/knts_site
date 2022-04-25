import Content from "../atoms/Content"

import "../../../styles/block/Skill.css"

function Skill() {
  return( 
    <div className="skills" id="skills">
      <h1 className="title" >Web Skills</h1>
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
                    <p>基本的なコーディングであれば可能です。</p>
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
                    <p>基本的なコーディングであれば可能です。</p>
                  </div>
               }
               />
               </section>
               <section>
               <Content
                 name="Git"
                 text={
                  <div>
                    <p>学習期間 1ヶ月</p>
                    <p>基本的なコーディングであれば可能です。</p>
                  </div>
               }
               />
               </section>  
             </div>
        </div>
      </div>
    </div>
  )
 }
 
 export default Skill