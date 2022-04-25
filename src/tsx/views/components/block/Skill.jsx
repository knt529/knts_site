import Content from "../atoms/Content"

import "../../../styles/block/Skill.css"

function Skill() {
  return( 
    <div className="skills" id="skills">
      <h1 className="title" >Web Skills</h1>
      <div className="skill">
        <div className="language">
             <div>
               <section>
               <Content
                 name="HTML/CSS"
                 text="基本的なコーディングであれば可能です。"
               />
               </section>
               <section>
               <Content
                 name="JavaScript"
                 text="書籍を用いて学習中。"
               />
               </section>  
             </div>
        </div>
        <div className="framework_tool">   
             <div>
               <section className="react">
               <Content
                 name="React"
                 text="書籍を用いて学習中。"
               />
               </section>
               <section>
               <Content
                 name="Git"
                 text="書籍を用いて学習中。"
               />
               </section>  
             </div>
        </div>
      </div>
    </div>
  )
 }
 
 export default Skill