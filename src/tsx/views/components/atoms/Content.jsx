import "../../../styles/atoms/Contetn.css"
function Content(props){
  return(
    <div className="content">
      <h3 className="name">{props.name}</h3>
      <p className="text">{props.text}</p>
    </div>
  )
}

export default Content