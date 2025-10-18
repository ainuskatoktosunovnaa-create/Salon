import "./style.css"
// import Logo from "../../assets/logo.svg"
import Foto from "../../assets/foto.png"



function Headers(){
    return (
      <header>
        <div id="header">
          /* <div className="container">
            <div className="header">
              {/* <img src={Logo} alt="" />
              <nav>
                <a href="">Главная</a>
                <a href="">О компании</a>
                <a href="">Магазин</a>
              </nav>
              <button>Записаться</button> */}
              <img src={Foto} alt="" />
              <h1>Эмне карайсын жалдырап ?</h1>
            </div>
          </div>
        </div>
      </header>
    );
}
export default Headers