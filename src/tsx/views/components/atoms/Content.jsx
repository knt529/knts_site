import "../../../styles/atoms/Contetn.css"
function Content(props){
  return(
    <div className="content">
      <h3 className="name">{props.name}</h3>
      <div className="text">{props.text}</div>
    </div>
  )
}

export default Content