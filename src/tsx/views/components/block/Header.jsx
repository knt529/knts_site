import "../../../styles/block/Header.css"
import "../../../styles/atoms/Cop.css"

function Header(){
  return(
    <div className="Header">
     <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">
          <h1>Kanato's Site</h1>
        </a>
        <nav className="nav">
          <ul className="nav__wrapper">
            <li className="nav__item">
              <a href="#about">About</a>
            </li>
            <li className="nav__item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav__item">
              <a href="#warks">Warks</a>
            </li>
            <li className="nav__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      <div className="cp_cont">
        <div className="cp_offcm01">
          <input type="checkbox" id="cp_toggle01"></input>
          <label for="cp_toggle01"><span></span></label>
          <div className="cp_menu">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#warks">Warks</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          </div>
        </div>
     	</div>
      </div>
    </header>
   </div>
  )
}

export default Header