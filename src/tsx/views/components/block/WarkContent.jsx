import "../../../styles/block/WarkContent.css"

function WarkContent (props) {
  return(
      <div className="warkContent">
        <section>
          <div className="wark_page">
             <a href={props.url} target="_blank" rel="noopener noreferrer"><img className="wark_img" src={props.img1}></img></a>

              <a href={props.url} target="_blank" rel="noopener noreferrer"><img className="wark_img2" src={props.img2}></img></a>

              <div className="overview">
                <h4>【概要】</h4>
                <p className="wark-title">{props.title}</p>
                <div className="detail">{props.detail}</div>
            </div>
          </div>
         </section>
       </div>
  )
}

export default WarkContent;